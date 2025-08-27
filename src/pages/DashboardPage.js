import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlanCard from "../components/PlanCard";
import Modal from "../components/Modal";
import { useAuth } from "../context/AuthContext";
import { getTransactions } from "../utils/api";

const PLANS = [
  { name: "Basic",  stake: 50,  daily: 20, duration: "1 month" },
  { name: "Gold",   stake: 100, daily: 35, duration: "1 month" },
  { name: "Master", stake: 200, daily: 50, duration: "1 month" },
  { name: "Premium",stake: 300, daily: 75, duration: "1 month" },
];

export default function Dashboard() {
  const { user } = useAuth();
  const nav = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const [showInsufficient, setShowInsufficient] = useState(null);
  const [activePlan, setActivePlan] = useState(() => JSON.parse(localStorage.getItem("pb_active_plan") || "null"));
  const [balance, setBalance] = useState(() => user?.balance || 0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) getTransactions(token).then(setTransactions).catch(()=>{});
  }, []);

  function handleSubscribe(plan) {
    if (balance < plan.stake) {
      setShowInsufficient(plan);
      return;
    }
    const newBal = balance - plan.stake;
    setBalance(newBal);
    localStorage.setItem("pb_active_plan", JSON.stringify({ ...plan, startedAt: Date.now() }));
    setActivePlan({ ...plan, startedAt: Date.now() });
    alert(`${plan.name} activated!`);
    nav("/history");
  }

  function toCurrency(v) {
    const extra = JSON.parse(localStorage.getItem("pb_profile_extra") || "{}");
    const symbol = extra.currency === "CAD" ? "C$" :
                   extra.currency === "GBP" ? "£"  :
                   extra.currency === "EUR" ? "€"  : "$";
    return `${symbol}${v}`;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="rounded-3xl border p-6 bg-white shadow-glossy">
            <h2 className="text-xl font-bold text-brand-700">Account Balance</h2>
            <p className="text-4xl font-extrabold text-brand-800 mt-2">{toCurrency(balance)}</p>
            <div className="mt-4 flex gap-3">
              <button onClick={()=>nav("/deposit")} className="px-4 py-2 rounded-lg bg-brand-500 text-white hover:bg-brand-600">Deposit</button>
              <button onClick={()=>nav("/withdraw")} className="px-4 py-2 rounded-lg border hover:border-brand-500">Withdraw</button>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-brand-700 mb-3">Plans</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PLANS.map((p) => (
                <PlanCard key={p.name} {...p} onSubscribe={()=>handleSubscribe(p)} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-3xl border p-6 bg-white">
            <h3 className="text-lg font-bold text-brand-700 mb-3">Active Plan</h3>
            {!activePlan ? (
              <p className="text-gray-600">No active plan.</p>
            ) : (
              <div className="p-4 rounded-xl bg-brand-50">
                <div className="font-semibold">{activePlan.name}</div>
                <div className="text-sm text-gray-600">Daily ROI: {activePlan.daily}%</div>
                <div className="text-sm text-gray-600">Stake: {toCurrency(activePlan.stake)}</div>
              </div>
            )}
          </div>

          <div className="rounded-3xl border p-6 bg-white mt-6">
            <h3 className="text-lg font-bold text-brand-700 mb-3">Notifications</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Your deposit is pending.</li>
              <li>• ROI credited today. (UI only for now)</li>
            </ul>
          </div>
        </div>
      </div>

      {showInsufficient && (
        <Modal
          title="Insufficient balance"
          onClose={()=>setShowInsufficient(null)}
          ctaText="Deposit now"
          onCta={()=>{ setShowInsufficient(null); nav("/deposit"); }}
        >
          You need at least {toCurrency(showInsufficient.stake)} to subscribe to {showInsufficient.name}.
        </Modal>
      )}
    </div>
  );
    }
