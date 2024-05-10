import React from 'react'
import Filter_toogle from '../../Component/Filter_toogle'


function filter() {

  let filter = [{
    heading: "Category",
    child: ["New Arrivals", "sale", "travel", "orginzations", "Accessories"]
  }, {
    heading: "acedmic",
    child: ["highschool", "Intermidiat", "graduation", "primery", "middle"]
  }]

  return (
    <div>
      <form className="hidden lg:block">
        <h3 className="sr-only">Categories</h3>
        <ul
          role="list"
          className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
        >
          <li>
            <a href="#">Totes</a>
          </li>
          <li>
            <a href="#">Backpacks</a>
          </li>
          <li>
            <a href="#">Travel Bags</a>
          </li>
          <li>
            <a href="#">Hip Bags</a>
          </li>
          <li>
            <a href="#">Laptop Sleeves</a>
          </li>
        </ul>

        <>
          <label htmlFor="basic-range-slider-usage" className="sr-only">
            Example range
          </label>
          <input
            type="range"
            className="w-full bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none
[&::-webkit-slider-thumb]:w-2.5
[&::-webkit-slider-thumb]:h-2.5
[&::-webkit-slider-thumb]:-mt-0.5
[&::-webkit-slider-thumb]:appearance-none
[&::-webkit-slider-thumb]:bg-white
[&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)]
[&::-webkit-slider-thumb]:rounded-full
[&::-webkit-slider-thumb]:transition-all
[&::-webkit-slider-thumb]:duration-150
[&::-webkit-slider-thumb]:ease-in-out
[&::-webkit-slider-thumb]:dark:bg-slate-700
[&::-moz-range-thumb]:w-2.5
[&::-moz-range-thumb]:h-2.5
[&::-moz-range-thumb]:appearance-none
[&::-moz-range-thumb]:bg-white
[&::-moz-range-thumb]:border-4
[&::-moz-range-thumb]:border-blue-600
[&::-moz-range-thumb]:rounded-full
[&::-moz-range-thumb]:transition-all
[&::-moz-range-thumb]:duration-150
[&::-moz-range-thumb]:ease-in-out

[&::-webkit-slider-runnable-track]:w-full
[&::-webkit-slider-runnable-track]:h-2
[&::-webkit-slider-runnable-track]:bg-gray-100
[&::-webkit-slider-runnable-track]:rounded-full
[&::-webkit-slider-runnable-track]:dark:bg-gray-700

[&::-moz-range-track]:w-full
[&::-moz-range-track]:h-2
[&::-moz-range-track]:bg-gray-100
[&::-moz-range-track]:rounded-full"
            id="basic-range-slider-usage"
          />
        </>
        <Filter_toogle filter={filter[0]} />
        <Filter_toogle filter={filter[1]} />
      </form>
    </div>
  )
}

export default filter