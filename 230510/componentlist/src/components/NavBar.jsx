import React, { useState } from "react";

const List = ({ listName }) => {
    if (listName === "상세정보") {
        return (
            <div>
                <h2>상세정보</h2>
                <p>상세정보 내용</p>
            </div>
        )
    } else if (listName === "Q&A") {
        return (
            <div>
                <h2>Q&A</h2>
                <p>Q&A 내용</p>
            </div>
        )
    } else if (listName === "Review") {
        return (
            <div>
                <h2>Review</h2>
                <p>Review 내용</p>
            </div>
        )
    }
}
export default function NavBar() {
    const [listName, setListName] = useState("상세정보");
    const checkId = (e) => {
        setListName(e.target.id);
    };

    return (
        <>
            <nav>
                <ul>
                    <li
                        id="상세정보"
                        style={
                            listName === "상세정보" ? { color: "red" } : { color: "black" }
                        }
                        onClick={checkId}
                    >
                        상세정보
                    </li>
                    <li
                        id="Q&A"
                        onClick={checkId}
                        style={listName === "Q&A" ? { color: "red" } : { color: "black" }}
                    >
                        Q&A
                    </li>
                    <li
                        id="Review"
                        onClick={checkId}
                        style={
                            listName === "Review" ? { color: "red" } : { color: "black" }
                        }
                    >
                        Review
                    </li>
                </ul>
            </nav>
            <List listName={listName} />
        </>
    );

}