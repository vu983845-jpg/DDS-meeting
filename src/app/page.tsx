
import React from 'react';

export default function Dashboard() {
    return (
        <>

            {/*  Header  */}
            <header className="sticky top-0 z-50 bg-card-bg border-b border-border-subtle px-6 py-3 shadow-sm">
                <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
                    {/*  Left: Logo & Nav  */}
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-3">
                            <div className="size-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">precision_manufacturing</span>
                            </div>
                            <h1 className="text-lg font-bold tracking-tight text-text-main whitespace-nowrap">DDS Meeting</h1>
                        </div>
                        <nav className="hidden lg:flex items-center gap-6">
                            <a className="text-sm font-semibold text-text-main hover:text-primary transition-colors" href="#">Dashboard</a>
                            <a className="text-sm font-medium text-gray-500 hover:text-primary transition-colors" href="#">Issues</a>
                            <a className="text-sm font-medium text-gray-500 hover:text-primary transition-colors" href="#">Safety Trigger</a>
                            <a className="text-sm font-medium text-gray-500 hover:text-primary transition-colors" href="#">Reports</a>
                        </nav>
                    </div>
                    {/*  Center: Search  */}
                    <div className="hidden md:flex flex-1 max-w-md mx-4">
                        <div className="relative w-full group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary">
                                <span className="material-symbols-outlined text-[20px]">search</span>
                            </div>
                            <input className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-background-light text-text-main placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-all" placeholder="Search issues, machines, IDs..." type="text" />
                        </div>
                    </div>
                    {/*  Right: Controls & User  */}
                    <div className="flex items-center gap-3">
                        {/*  Date Selector  */}
                        <button className="hidden xl:flex items-center gap-2 px-3 py-2 bg-background-light hover:bg-gray-200 rounded-lg text-sm font-medium text-text-main transition-colors border border-transparent hover:border-gray-300">
                            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                            <span>Yesterday</span>
                            <span className="material-symbols-outlined text-[18px] text-gray-400">arrow_drop_down</span>
                        </button>
                        {/*  Toggles  */}
                        <div className="hidden lg:flex items-center bg-background-light rounded-lg p-1 border border-gray-200">
                            <button className="px-3 py-1.5 rounded-md bg-white shadow-sm text-xs font-bold text-primary border border-gray-100 flex items-center gap-1">
                                <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                                DDS Active
                            </button>
                            <button className="px-3 py-1.5 rounded-md text-xs font-medium text-gray-500 hover:text-text-main flex items-center gap-1 transition-colors">
                                <span className="material-symbols-outlined text-[16px]">tv</span>
                                TV Mode
                            </button>
                        </div>
                        {/*  Add Issue CTA  */}
                        <button className="flex items-center gap-2 bg-primary hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md shadow-primary/20 transition-all active:scale-95">
                            <span className="material-symbols-outlined text-[20px]">add</span>
                            <span className="hidden sm:inline">Add Issue</span>
                        </button>
                        {/*  User Avatar  */}
                        <div className="relative ml-2">
                            <div className="size-9 rounded-full bg-gray-200 border border-gray-300 overflow-hidden cursor-pointer" data-alt="User Avatar Profile Picture">
                                <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHUFfJyN_lWwI5xjPYOGuI4fhPAf0630mfDjQC6EIsG_pwf_fBKHR8JXDTSZKglOSzbIy9CBBK6JtBgjQJ9tHorb8Ic-Y2XvHhL8xsZDWwOJtDTUKvkSwnXFb5AK0gDGlsetgfkinVYW6CPgaYPJkyMGTA4cwjQMCy0oKUf0XiKT-6YIA4p4P-48JfiTLpH9B0LqL_K1lgURE3sc19XSv-zIvwvJJrSA5zDVJvnRV1h3L0kd-htlDllHxm2fCYvs64u2PCSEQhLOg" />
                            </div>
                            <div className="absolute bottom-0 right-0 size-2.5 bg-green-500 border-2 border-white rounded-full"></div>
                        </div>
                    </div>
                </div>
            </header>
            {/*  Main Content  */}
            <main className="flex-1 px-4 py-6 md:px-8 max-w-[1600px] mx-auto w-full">
                {/*  KPI Strip  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {/*  Card 1  */}
                    <div className="bg-card-bg rounded-xl border border-border-subtle p-5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                <span className="material-symbols-outlined">assignment</span>
                            </div>
                            <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded">Last 24h</span>
                        </div>
                        <h3 className="text-gray-500 text-sm font-medium">Total Issues</h3>
                        <div className="flex items-baseline gap-2 mt-1">
                            <p className="text-2xl font-bold text-text-main">12</p>
                            <span className="text-xs font-medium text-red-500 flex items-center">
                                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                                +2
                            </span>
                        </div>
                    </div>
                    {/*  Card 2  */}
                    <div className="bg-card-bg rounded-xl border border-border-subtle p-5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                                <span className="material-symbols-outlined">timer_off</span>
                            </div>
                            <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded">Target: &lt; 300</span>
                        </div>
                        <h3 className="text-gray-500 text-sm font-medium">Total Downtime (min)</h3>
                        <div className="flex items-baseline gap-2 mt-1">
                            <p className="text-2xl font-bold text-text-main">450</p>
                            <span className="text-xs font-medium text-red-500 flex items-center">
                                <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
                                Over Target
                            </span>
                        </div>
                    </div>
                    {/*  Card 3  */}
                    <div className="bg-card-bg rounded-xl border border-border-subtle p-5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                <span className="material-symbols-outlined">factory</span>
                            </div>
                        </div>
                        <h3 className="text-gray-500 text-sm font-medium">Top Dept Impacted</h3>
                        <div className="mt-1">
                            <p className="text-2xl font-bold text-text-main">Shelling</p>
                        </div>
                    </div>
                    {/*  Card 4  */}
                    <div className="bg-card-bg rounded-xl border border-border-subtle p-5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                            <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                                <span className="material-symbols-outlined">warning</span>
                            </div>
                            <span className="text-xs font-medium text-red-100 bg-red-600 px-2 py-1 rounded">Critical</span>
                        </div>
                        <h3 className="text-gray-500 text-sm font-medium">Safety Triggers</h3>
                        <div className="mt-1">
                            <p className="text-2xl font-bold text-text-main">2</p>
                        </div>
                    </div>
                </div>
                {/*  Content Grid  */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
                    {/*  Left Column: Issues List (70%)  */}
                    <div className="lg:col-span-8 flex flex-col gap-4">
                        <div className="bg-card-bg rounded-xl border border-border-subtle shadow-sm flex flex-col h-full">
                            {/*  Header & Filters  */}
                            <div className="p-5 border-b border-border-subtle">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                    <h2 className="text-lg font-bold text-text-main flex items-center gap-2">
                                        <span className="material-symbols-outlined text-gray-400">list_alt</span>
                                        Issues to Review
                                    </h2>
                                    <div className="flex gap-2">
                                        <button className="p-2 text-gray-500 hover:text-text-main hover:bg-gray-100 rounded-lg transition-colors" title="Export">
                                            <span className="material-symbols-outlined">download</span>
                                        </button>
                                        <button className="p-2 text-gray-500 hover:text-text-main hover:bg-gray-100 rounded-lg transition-colors" title="Print">
                                            <span className="material-symbols-outlined">print</span>
                                        </button>
                                    </div>
                                </div>
                                {/*  Filter Chips & Dropdowns  */}
                                <div className="flex flex-wrap items-center gap-3">
                                    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-1">
                                        <button className="bg-text-main text-white px-3 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap">All Depts</button>
                                        <button className="bg-background-light text-gray-600 hover:bg-gray-200 px-3 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap">Steaming</button>
                                        <button className="bg-background-light text-gray-600 hover:bg-gray-200 px-3 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap">Shelling</button>
                                        <button className="bg-background-light text-gray-600 hover:bg-gray-200 px-3 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap">Packaging</button>
                                        <button className="bg-background-light text-gray-600 hover:bg-gray-200 px-3 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap">Maintenance</button>
                                    </div>
                                    <div className="h-6 w-px bg-gray-200 mx-1 hidden sm:block"></div>
                                    <div className="flex gap-2">
                                        <select className="form-select text-sm py-1.5 pl-3 pr-8 rounded-lg border-gray-200 bg-background-light text-gray-600 focus:ring-primary focus:border-primary">
                                            <option>Status: All</option>
                                            <option>Open</option>
                                            <option>In Progress</option>
                                            <option>Resolved</option>
                                        </select>
                                        <select className="form-select text-sm py-1.5 pl-3 pr-8 rounded-lg border-gray-200 bg-background-light text-gray-600 focus:ring-primary focus:border-primary">
                                            <option>Impact: All</option>
                                            <option>High</option>
                                            <option>Medium</option>
                                            <option>Low</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/*  Table  */}
                            <div className="overflow-x-auto flex-1">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-50/50 border-b border-border-subtle text-xs uppercase tracking-wider text-gray-500 font-semibold">
                                            <th className="px-5 py-3 w-20">ID</th>
                                            <th className="px-5 py-3">Dept</th>
                                            <th className="px-5 py-3">Time</th>
                                            <th className="px-5 py-3">Machine</th>
                                            <th className="px-5 py-3">Reason</th>
                                            <th className="px-5 py-3">Impact</th>
                                            <th className="px-5 py-3 text-right">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border-subtle text-sm">
                                        {/*  Row 1  */}
                                        <tr className="group hover:bg-gray-50 transition-colors cursor-pointer">
                                            <td className="px-5 py-4 font-medium text-text-main">#1023</td>
                                            <td className="px-5 py-4">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                                    Steaming
                                                </span>
                                            </td>
                                            <td className="px-5 py-4 text-gray-600">08:30 AM</td>
                                            <td className="px-5 py-4 text-text-main font-medium">Boiler A</td>
                                            <td className="px-5 py-4 text-gray-600">Low pressure alert</td>
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-1 text-red-600 font-medium">
                                                    <span className="material-symbols-outlined text-[16px]">priority_high</span>
                                                    High
                                                </div>
                                            </td>
                                            <td className="px-5 py-4 text-right">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-primary text-white">
                                                    OPEN
                                                </span>
                                            </td>
                                        </tr>
                                        {/*  Row 2  */}
                                        <tr className="group hover:bg-gray-50 transition-colors cursor-pointer">
                                            <td className="px-5 py-4 font-medium text-text-main">#1022</td>
                                            <td className="px-5 py-4">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100">
                                                    Shelling
                                                </span>
                                            </td>
                                            <td className="px-5 py-4 text-gray-600">07:45 AM</td>
                                            <td className="px-5 py-4 text-text-main font-medium">Cracker 2</td>
                                            <td className="px-5 py-4 text-gray-600">Hopper Jammed</td>
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-1 text-orange-600 font-medium">
                                                    <span className="material-symbols-outlined text-[16px]">remove</span>
                                                    Medium
                                                </div>
                                            </td>
                                            <td className="px-5 py-4 text-right">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-yellow-100 text-yellow-800 border border-yellow-200">
                                                    In Progress
                                                </span>
                                            </td>
                                        </tr>
                                        {/*  Row 3  */}
                                        <tr className="group hover:bg-gray-50 transition-colors cursor-pointer">
                                            <td className="px-5 py-4 font-medium text-text-main">#1021</td>
                                            <td className="px-5 py-4">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100">
                                                    Packaging
                                                </span>
                                            </td>
                                            <td className="px-5 py-4 text-gray-600">06:15 AM</td>
                                            <td className="px-5 py-4 text-text-main font-medium">Bagger 5</td>
                                            <td className="px-5 py-4 text-gray-600">Sensor fail</td>
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-1 text-green-600 font-medium">
                                                    <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                                                    Low
                                                </div>
                                            </td>
                                            <td className="px-5 py-4 text-right">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-green-100 text-green-800 border border-green-200">
                                                    Resolved
                                                </span>
                                            </td>
                                        </tr>
                                        {/*  Row 4  */}
                                        <tr className="group hover:bg-gray-50 transition-colors cursor-pointer">
                                            <td className="px-5 py-4 font-medium text-text-main">#1020</td>
                                            <td className="px-5 py-4">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100">
                                                    Shelling
                                                </span>
                                            </td>
                                            <td className="px-5 py-4 text-gray-600">05:30 AM</td>
                                            <td className="px-5 py-4 text-text-main font-medium">Sorter B</td>
                                            <td className="px-5 py-4 text-gray-600">Calibration error</td>
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-1 text-orange-600 font-medium">
                                                    <span className="material-symbols-outlined text-[16px]">remove</span>
                                                    Medium
                                                </div>
                                            </td>
                                            <td className="px-5 py-4 text-right">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-primary text-white">
                                                    OPEN
                                                </span>
                                            </td>
                                        </tr>
                                        {/*  Row 5  */}
                                        <tr className="group hover:bg-gray-50 transition-colors cursor-pointer">
                                            <td className="px-5 py-4 font-medium text-text-main">#1019</td>
                                            <td className="px-5 py-4">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                                                    Maintenance
                                                </span>
                                            </td>
                                            <td className="px-5 py-4 text-gray-600">04:00 AM</td>
                                            <td className="px-5 py-4 text-text-main font-medium">Conv. 3</td>
                                            <td className="px-5 py-4 text-gray-600">Belt slip detected</td>
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-1 text-red-600 font-medium">
                                                    <span className="material-symbols-outlined text-[16px]">priority_high</span>
                                                    High
                                                </div>
                                            </td>
                                            <td className="px-5 py-4 text-right">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-gray-200 text-gray-600 border border-gray-300">
                                                    Pending
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/*  Pagination (Simple)  */}
                            <div className="px-5 py-3 border-t border-border-subtle flex items-center justify-between bg-gray-50 rounded-b-xl">
                                <span className="text-xs text-gray-500">Showing 1-5 of 12 issues</span>
                                <div className="flex gap-2">
                                    <button className="p-1 rounded hover:bg-gray-200 text-gray-500 disabled:opacity-50">
                                        <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                                    </button>
                                    <button className="p-1 rounded hover:bg-gray-200 text-gray-500">
                                        <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  Right Column: Safety & Notes (30%)  */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        {/*  Safety Triggers Module  */}
                        <div className="bg-card-bg rounded-xl border border-border-subtle shadow-sm flex flex-col">
                            <div className="p-4 border-b border-border-subtle flex justify-between items-center bg-red-50/50 rounded-t-xl">
                                <h3 className="font-bold text-text-main flex items-center gap-2">
                                    <span className="material-symbols-outlined text-red-600">local_fire_department</span>
                                    Safety Triggers
                                </h3>
                                <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full">2 Active</span>
                            </div>
                            <div className="p-4 flex flex-col gap-3">
                                {/*  Trigger Item 1  */}
                                <div className="flex gap-3 p-3 rounded-lg bg-background-light border border-border-subtle hover:border-red-200 transition-colors group">
                                    <div className="mt-0.5 text-red-600">
                                        <span className="material-symbols-outlined text-[20px]">warning</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-text-main">Spill in Chemical Storage</p>
                                        <div className="flex justify-between items-center mt-1">
                                            <span className="text-xs text-gray-500">Zone B • 09:15 AM</span>
                                            <div className="flex items-center gap-1">
                                                <div className="size-5 rounded-full bg-gray-300 overflow-hidden" data-alt="Small user avatar">
                                                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-HZlzW4i-ZInE2Ph21m_xya1EA6P3UYE1WGsN-VUc17YbR07nRqZFLIsCmUpBK0RQeXHWik_09VqGxLNWvvAtaLC_fV8F7Uc-tAn6u_bOHoXB0La837Rmv4zvvsDuItn3eo6hgC5ZoaqUl3jJjgAcV4Wsv3CzCpJWcW_oOS3x6BW8rm0noSDCCG7mAYaI_whOJ87jK_VJHuQRPu2r4s5Vr80Trj_q3ymX8ukJHotLC1trZhETq8tY1KstwxdXUL5MtrTltWXvqhY" />
                                                </div>
                                                <span className="text-xs font-medium text-gray-600">Mike R.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  Trigger Item 2  */}
                                <div className="flex gap-3 p-3 rounded-lg bg-background-light border border-border-subtle hover:border-red-200 transition-colors group">
                                    <div className="mt-0.5 text-orange-500">
                                        <span className="material-symbols-outlined text-[20px]">report_problem</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-text-main">Guard Rail Loose</p>
                                        <div className="flex justify-between items-center mt-1">
                                            <span className="text-xs text-gray-500">Line 4 • Yesterday</span>
                                            <div className="flex items-center gap-1">
                                                <div className="size-5 rounded-full bg-gray-300 overflow-hidden" data-alt="Small user avatar">
                                                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBupjzhKYpwgjrsPbrBjq4rUuijvoPJUF7VFKiXxGIp7kpxAYCEawrNsXTrmvSp2vmESOfNt9JE-gBCKV6gEOrVR0c3Pyel7adA01b9xFs09CJDrl-PYHaZljeT8P4FcqjltZY6f041VnJDbKQcGJM12KMw0o5Vw18jFlq6XNceJfcQYPuLeo0H6qIgnE8a7fO07AnFnkaWmW3EvqyzhYH8XG5tusrGzwmAOnGqr4m9U55RACxZIxt1Q__mIJN0pW0QFRqqk73LAGY" />
                                                </div>
                                                <span className="text-xs font-medium text-gray-600">Sarah L.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 border-t border-border-subtle text-center">
                                <a className="text-sm font-medium text-primary hover:underline" href="#">View All Safety Reports</a>
                            </div>
                        </div>
                        {/*  DDS Notes  */}
                        <div className="bg-card-bg rounded-xl border border-border-subtle shadow-sm flex flex-col flex-1">
                            <div className="p-4 border-b border-border-subtle">
                                <h3 className="font-bold text-text-main flex items-center gap-2">
                                    <span className="material-symbols-outlined text-gray-400">edit_note</span>
                                    DDS Notes
                                </h3>
                            </div>
                            <div className="p-4 flex flex-col gap-4 h-full">
                                <textarea className="w-full resize-none h-32 p-3 text-sm bg-yellow-50/50 border border-yellow-200 rounded-lg placeholder-gray-400 text-text-main focus:ring-yellow-400 focus:border-yellow-400" placeholder="Type meeting notes here..."></textarea>
                                <div>
                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Actions Decided Today</h4>
                                    <div className="flex flex-col gap-2">
                                        <label className="flex items-start gap-2 cursor-pointer group">
                                            <input className="mt-1 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
                                            <span className="text-sm text-gray-700 group-hover:text-text-main">Schedule deep clean for Boiler A</span>
                                        </label>
                                        <label className="flex items-start gap-2 cursor-pointer group">
                                            <input className="mt-1 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
                                            <span className="text-sm text-gray-700 group-hover:text-text-main">Order replacement sensor for Bagger 5</span>
                                        </label>
                                        <label className="flex items-start gap-2 cursor-pointer group">
                                            <input checked={true} className="mt-1 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
                                            <span className="text-sm text-gray-400 line-through">Review shift handover logs</span>
                                        </label>
                                        <div className="flex items-center gap-2 mt-2">
                                            <input className="flex-1 text-sm border-none bg-transparent focus:ring-0 p-0 placeholder-gray-400" placeholder="+ Add new action item" type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  Card Footer  */}
                            <div className="p-4 border-t border-border-subtle flex justify-between">
                                <button className="text-sm font-medium text-gray-500 hover:text-text-main flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[16px]">ios_share</span>
                                    Share
                                </button>
                                <button className="text-sm font-bold text-primary hover:text-red-700">Save Notes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}
