'use client'

import { useState } from "react";

export default function List() {
    let products = ['Tomatoes', 'Pasta', 'Coconut'];
    let [qty, qtyf] = useState([0, 0, 0]); // 해당 부분 데이터 변경되면 자동 재렌더링
    return (
        <div>
            <h4 className="title">상품목록</h4>
            {
                products.map(function (a, i) {
                    return (
                        <div className="food" key={i}>
                            <img src={`food${i}.png`} className="food-img"></img>
                            <h4>{a} $40</h4>
                            <button onClick={function () {
                                let copyQty = [...qty]; // 독립적인 array 복사본 생성
                                copyQty[i]--;
                                qtyf(copyQty);
                                // array나 object자료형 state 수정할때는 이렇게 사용해야함
                            }}>-</button>
                            <span> {qty[i]} </span>
                            <button onClick={function () {
                                let copyQty = [...qty]; // 독립적인 array 복사본 생성
                                copyQty[i]++;
                                qtyf(copyQty);
                            }}>+</button>
                        </div>
                    )
                })
            }
            {/* react는 map 반복문 사용시 key 사용을 권장 */}
        </div >
    );
}