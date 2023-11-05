
export default function Features1() {
    return (
//         <!--
//   This example requires some changes to your config:
  
//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/aspect-ratio'),
//     ],
//   }
//   ```
// -->
        <div id="why" className="bg-white py-24 sm:py-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
            {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We approach the workplace as something that adds to our lives and adds value to world.</h2> */}
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Introducing a new era of Customer Intelligence with Generative AI.</h2>
            <p className="mt-6 text-base leading-7 text-gray-600">Voxlab is working towards giving contact center new and efficient way to satisfy their customers with Generative AI.</p>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-2 rounded-2xl bg-gray-200 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
            <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">25% Time Save</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-gray-900">We can save your agent's time by 25%</p>
                <p className="mt-2 text-base leading-7 text-gray-600">We will automatically generate summry as well as conversation highlights.</p>
            </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-56">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">100% CSAT</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">Voxlab can automatically collect CSAT scores on every call.</p>
                <p className="mt-2 text-base leading-7 text-gray-400">Increase CSAT by 14% in less than three weeks.</p>
            </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">90% Cost Reduction</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">Our Generative AI solution cost you 90% less than other services</p>
                <p className="mt-2 text-base leading-7 text-indigo-200">Our mission is to provide best in class Generative AI solution while keeping it cost friendly.</p>
            </div>
            </div>
        </div>
        </div>
        </div>


    )
}