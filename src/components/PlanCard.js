export default function PlanCard({ name, stake, daily, duration, onSubscribe }) {
  return (
    <div className="rounded-2xl border p-5 hover:shadow-glossy">
      <div className="flex items-start justify-between">
        <h4 className="text-lg font-bold text-brand-700">{name}</h4>
        <span className="text-accent-500 font-semibold">{duration}</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
        <div>
          <div className="text-gray-500">Stake</div>
          <div className="font-semibold">${stake}</div>
        </div>
        <div>
          <div className="text-gray-500">Daily</div>
          <div className="font-semibold">{daily}%</div>
        </div>
        <div>
          <div className="text-gray-500">ROI</div>
          <div className="font-semibold">Auto daily</div>
        </div>
      </div>
      <button
        className="w-full mt-4 rounded-xl bg-brand-500 text-white py-2 hover:bg-brand-600"
        onClick={onSubscribe}
      >
        Subscribe
      </button>
    </div>
  );
}
