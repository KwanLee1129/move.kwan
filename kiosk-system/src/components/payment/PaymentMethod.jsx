export default function PaymentMethod({ onSelect }) {
  return (
    // 결제 수단 선택 컨테이너
    // Payment method selection container
    <div className="border rounded-lg p-4 bg-white">
      <h2 className="text-xl font-medium mb-4">결제 수단 선택</h2>
      {/* 결제 수단 버튼 그룹 */}
      {/* Payment method button group */}
      <div className="space-y-2">
        {/* 카드 결제 버튼 */}
        {/* Card payment button */}
        <button
          onClick={() => onSelect("card")}
          className="w-full p-3 text-left border rounded hover:bg-gray-50"
        >
          카드 결제
        </button>
        {/* 현금 결제 버튼 */}
        {/* Cash payment button */}
        <button
          onClick={() => onSelect("cash")}
          className="w-full p-3 text-left border rounded hover:bg-gray-50"
        >
          현금 결제
        </button>
      </div>
    </div>
  );
}
