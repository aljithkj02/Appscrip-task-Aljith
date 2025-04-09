"use client"
import Image from "next/image"
import RightArrow from '../../assets/rightArrow.png'
import LeftArrow from '../../assets/leftArrow.png'
import DownArrow from '../../assets/downArrow.svg'
import { useEffect, useRef, useState } from "react";

const options = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH",
];

export const FilterBox = () => {

    const [selected, setSelected] = useState("RECOMMENDED");
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleSelect = (option) => {
        setSelected(option);
        setOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="filter-parent">
            <section className="container">
                <div id="filterBox">
                    <div>
                        <p className="mobileOff">3425 ITEMS</p>
                        <div>
                            <Image src={RightArrow} alt="Show filter" className="mobileOff" />
                            <span className="mobileOff">SHOW FILTER</span>
                        </div>
                        <p className="mobileOn">FILTER</p>
                    </div>

                    <div>
                        <div className="custom-dropdown" ref={dropdownRef}>
                            <div className="selected-value" onClick={() => setOpen(!open)}>
                                {selected}
                                <Image src={DownArrow} alt="Dropdown icon" />
                            </div>
                            {open && (
                                <div className="dropdown-options">
                                    {options.map((option) => (
                                        <div
                                            key={option}
                                            className={`dropdown-option ${selected === option ? "selected" : ""
                                                }`}
                                            onClick={() => handleSelect(option)}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}