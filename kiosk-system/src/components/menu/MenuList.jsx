import { useState } from "react";
import MenuItem from "./MenuItem";

export default function MenuList() {
  // 선택된 카테고리 상태 관리
  // Manage selected category state
  const [selectedCategory, setSelectedCategory] = useState("전체");

  // 메뉴 아이템 데이터 (추후 API나 DB에서 가져올 수 있음)
  // Menu items data (can be fetched from API or DB later)
  const menuItems = [
    { id: 1, name: "아메리카노", price: 4500, category: "커피" },
    { id: 2, name: "카페라떼", price: 5000, category: "커피" },
    { id: 3, name: "카푸치노", price: 5000, category: "커피" },
    { id: 4, name: "에스프레소", price: 3500, category: "커피" },
  ];

  // 카테고리 목록
  // Category list
  const categories = ["전체", "커피", "논커피", "디저트"];

  // 선택된 카테고리에 따라 메뉴 필터링
  // Filter menu items based on selected category
  const filteredItems =
    selectedCategory === "전체"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div>
      {/* 카테고리 선택 버튼 그룹 */}
      {/* Category selection button group */}
      <div className="flex space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* 메뉴 아이템 그리드 */}
      {/* Menu items grid */}
      <div className="grid grid-cols-2 gap-4">
        {filteredItems.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
