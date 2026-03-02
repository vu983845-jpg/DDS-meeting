
import React from 'react';

export default function TVMode() {
  return (
    <>

{/*  Header  */}
<header className="flex-none bg-white dark:bg-[#2a1a1b] border-b border-slate-200 dark:border-[#3d2527] px-8 py-5 shadow-sm z-10">
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-5">
<div className="flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary">
<span className="material-symbols-outlined text-4xl">precision_manufacturing</span>
</div>
<h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">DDS Meeting</h1>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
</span>
<span className="text-primary font-bold text-lg tracking-wide uppercase">TV Mode</span>
</div>
<div className="px-5 py-3 bg-slate-100 dark:bg-[#3d2527] rounded-lg border border-slate-200 dark:border-[#523235]">
<span className="text-slate-600 dark:text-slate-300 text-lg font-semibold">Last updated: Today 08:30 AM (Auto-refresh: 60s)</span>
</div>
</div>
</div>
</header>
{/*  Main Content  */}
<main className="flex-1 flex flex-col p-8 gap-8 overflow-hidden">
{/*  KPI Strip  */}
<div className="grid grid-cols-4 gap-6 flex-none">
{/*  Card 1  */}
<div className="bg-white dark:bg-[#2a1a1b] rounded-xl p-8 shadow-sm border border-slate-100 dark:border-[#3d2527] flex flex-col justify-between relative overflow-hidden group">
<div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-slate-500 dark:text-slate-400 text-xl font-bold uppercase tracking-wider">Total Issues</h3>
<span className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-lg font-bold px-3 py-1 rounded-md flex items-center gap-1">
<span className="material-symbols-outlined text-xl">arrow_upward</span> +2
                    </span>
</div>
<p className="text-6xl font-black text-slate-900 dark:text-white mt-2">12</p>
</div>
{/*  Card 2  */}
<div className="bg-white dark:bg-[#2a1a1b] rounded-xl p-8 shadow-sm border border-slate-100 dark:border-[#3d2527] flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-slate-500 dark:text-slate-400 text-xl font-bold uppercase tracking-wider">Total Downtime</h3>
<span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-lg font-bold px-3 py-1 rounded-md flex items-center gap-1">
<span className="material-symbols-outlined text-xl">warning</span> +45m
                    </span>
</div>
<p className="text-6xl font-black text-slate-900 dark:text-white mt-2">4<span className="text-4xl text-slate-400 font-bold ml-1">h</span> 20<span className="text-4xl text-slate-400 font-bold ml-1">m</span></p>
</div>
{/*  Card 3  */}
<div className="bg-white dark:bg-[#2a1a1b] rounded-xl p-8 shadow-sm border border-slate-100 dark:border-[#3d2527] flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 left-0 w-2 h-full bg-slate-400"></div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-slate-500 dark:text-slate-400 text-xl font-bold uppercase tracking-wider">Top Dept</h3>
</div>
<p className="text-5xl font-black text-slate-900 dark:text-white mt-2 truncate">Assembly</p>
</div>
{/*  Card 4  */}
<div className="bg-white dark:bg-[#2a1a1b] rounded-xl p-8 shadow-sm border border-slate-100 dark:border-[#3d2527] flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-slate-500 dark:text-slate-400 text-xl font-bold uppercase tracking-wider">Safety Triggers</h3>
<span className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-lg font-bold px-3 py-1 rounded-md flex items-center gap-1">
<span className="material-symbols-outlined text-xl">check_circle</span> OK
                    </span>
</div>
<p className="text-6xl font-black text-slate-900 dark:text-white mt-2">0</p>
</div>
</div>
{/*  Table Section  */}
<div className="flex-1 bg-white dark:bg-[#2a1a1b] rounded-xl shadow-sm border border-slate-200 dark:border-[#3d2527] flex flex-col overflow-hidden">
<div className="px-8 py-6 border-b border-slate-200 dark:border-[#3d2527] flex justify-between items-center bg-slate-50 dark:bg-[#251617]">
<h2 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
<span className="material-symbols-outlined text-3xl text-primary">assignment_late</span>
                    Issues to Review
                </h2>
<div className="flex gap-4">
<span className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium text-lg">
<span className="size-3 bg-red-50 border-l-4 border-primary inline-block"></span> New/Updated
                     </span>
</div>
</div>
<div className="flex-1 overflow-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-slate-50 dark:bg-[#251617] sticky top-0 z-10 shadow-sm">
<tr>
<th className="py-5 px-8 text-slate-500 dark:text-slate-400 font-bold uppercase text-lg w-32 tracking-wider">ID</th>
<th className="py-5 px-6 text-slate-500 dark:text-slate-400 font-bold uppercase text-lg tracking-wider">Dept</th>
<th className="py-5 px-6 text-slate-500 dark:text-slate-400 font-bold uppercase text-lg tracking-wider">Time</th>
<th className="py-5 px-6 text-slate-500 dark:text-slate-400 font-bold uppercase text-lg tracking-wider">Machine</th>
<th className="py-5 px-6 text-slate-500 dark:text-slate-400 font-bold uppercase text-lg w-1/4 tracking-wider">Reason</th>
<th className="py-5 px-6 text-slate-500 dark:text-slate-400 font-bold uppercase text-lg tracking-wider">Impact</th>
<th className="py-5 px-8 text-slate-500 dark:text-slate-400 font-bold uppercase text-lg tracking-wider text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-[#3d2527]">
{/*  Row 1: New Item (Highlighted)  */}
<tr className="bg-red-50/50 dark:bg-red-900/10 border-l-[6px] border-l-primary">
<td className="py-6 px-8 text-xl font-bold text-slate-900 dark:text-white pl-[26px]">#8291</td>
<td className="py-6 px-6">
<span className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg text-lg font-bold">Assembly</span>
</td>
<td className="py-6 px-6 text-xl text-slate-700 dark:text-slate-300 font-medium">08:15 AM</td>
<td className="py-6 px-6 text-xl text-slate-700 dark:text-slate-300 font-bold">CNC-04</td>
<td className="py-6 px-6 text-xl text-slate-700 dark:text-slate-300 font-medium">Tool Breakage</td>
<td className="py-6 px-6">
<span className="text-red-600 dark:text-red-400 font-bold text-xl flex items-center gap-2">
<span className="material-symbols-outlined">priority_high</span> High
                                </span>
</td>
<td className="py-6 px-8 text-right">
<span className="inline-flex items-center justify-center min-w-[120px] px-5 py-2 rounded-lg bg-primary text-white text-lg font-bold shadow-md">
                                    OPEN
                                </span>
</td>
</tr>
{/*  Row 2: Standard  */}
<tr className="hover:bg-slate-50 dark:hover:bg-[#3d2527] transition-colors border-l-[6px] border-l-transparent">
<td className="py-6 px-8 text-xl font-medium text-slate-500 dark:text-slate-400 pl-[26px]">#8290</td>
<td className="py-6 px-6">
<span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-lg font-bold">Packaging</span>
</td>
<td className="py-6 px-6 text-xl text-slate-600 dark:text-slate-400">07:45 AM</td>
<td className="py-6 px-6 text-xl text-slate-600 dark:text-slate-400 font-bold">Packer-02</td>
<td className="py-6 px-6 text-xl text-slate-600 dark:text-slate-400">Jam</td>
<td className="py-6 px-6">
<span className="text-orange-500 dark:text-orange-400 font-bold text-xl">Medium</span>
</td>
<td className="py-6 px-8 text-right">
<span className="inline-flex items-center justify-center min-w-[120px] px-5 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 text-lg font-bold">
                                    OPEN
                                </span>
</td>
</tr>
{/*  Row 3: Standard  */}
<tr className="hover:bg-slate-50 dark:hover:bg-[#3d2527] transition-colors border-l-[6px] border-l-transparent">
<td className="py-6 px-8 text-xl font-medium text-slate-500 dark:text-slate-400 pl-[26px]">#8289</td>
<td className="py-6 px-6">
<span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-lg font-bold">Assembly</span>
</td>
<td className="py-6 px-6 text-xl text-slate-600 dark:text-slate-400">06:30 AM</td>
<td className="py-6 px-6 text-xl text-slate-600 dark:text-slate-400 font-bold">CNC-01</td>
<td className="py-6 px-6 text-xl text-slate-600 dark:text-slate-400">Material Shortage</td>
<td className="py-6 px-6">
<span className="text-slate-400 dark:text-slate-500 font-bold text-xl">Low</span>
</td>
<td className="py-6 px-8 text-right">
<span className="inline-flex items-center justify-center min-w-[120px] px-5 py-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-lg font-bold">
                                    RESOLVED
                                </span>
</td>
</tr>
{/*  Row 4: Updated (Highlighted)  */}
<tr className="bg-red-50/30 dark:bg-red-900/5 border-l-[6px] border-l-primary/40">
<td className="py-6 px-8 text-xl font-medium text-slate-800 dark:text-slate-200 pl-[26px]">#8288</td>
<td className="py-6 px-6">
<span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-lg font-bold">Logistics</span>
</td>
<td className="py-6 px-6 text-xl text-slate-600 dark:text-slate-400">05:15 AM</td>
<td className="py-6 px-6 text-xl text-slate-600 dark:text-slate-400 font-bold">Forklift-3</td>
<td className="py-6 px-6 text-xl text-slate-600 dark:text-slate-400">Battery Issue</td>
<td className="py-6 px-6">
<span className="text-orange-500 dark:text-orange-400 font-bold text-xl">Medium</span>
</td>
<td className="py-6 px-8 text-right">
<span className="inline-flex items-center justify-center min-w-[120px] px-5 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-lg font-bold">
                                    IN PROGRESS
                                </span>
</td>
</tr>
{/*  Row 5: Standard  */}
<tr className="hover:bg-slate-50 dark:hover:bg-[#3d2527] transition-colors border-l-[6px] border-l-transparent">
<td className="py-6 px-8 text-xl font-medium text-slate-500 dark:text-slate-400 pl-[26px]">#8287</td>
<td className="py-6 px-6">
<span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-lg font-bold">Quality</span>
</td>
<td className="py-6 px-6 text-xl text-slate-600 dark:text-slate-400">Yesterday</td>
<td className="py-6 px-6 text-xl text-slate-600 dark:text-slate-400 font-bold">Insp-02</td>
<td className="py-6 px-6 text-xl text-slate-600 dark:text-slate-400">Calibration</td>
<td className="py-6 px-6">
<span className="text-slate-400 dark:text-slate-500 font-bold text-xl">Low</span>
</td>
<td className="py-6 px-8 text-right">
<span className="inline-flex items-center justify-center min-w-[120px] px-5 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-500 text-lg font-bold">
                                    CLOSED
                                </span>
</td>
</tr>
{/*  Row 6: Standard  */}
<tr className="hover:bg-slate-50 dark:hover:bg-[#3d2527] transition-colors border-l-[6px] border-l-transparent">
<td className="py-6 px-8 text-xl font-medium text-slate-500 dark:text-slate-400 pl-[26px]">#8286</td>
<td className="py-6 px-6">
<span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-lg font-bold">Assembly</span>
</td>
<td className="py-6 px-6 text-xl text-slate-600 dark:text-slate-400">Yesterday</td>
<td className="py-6 px-6 text-xl text-slate-600 dark:text-slate-400 font-bold">CNC-04</td>
<td className="py-6 px-6 text-xl text-slate-600 dark:text-slate-400">Software Error</td>
<td className="py-6 px-6">
<span className="text-red-600 dark:text-red-400 font-bold text-xl flex items-center gap-2">
<span className="material-symbols-outlined">priority_high</span> High
                                </span>
</td>
<td className="py-6 px-8 text-right">
<span className="inline-flex items-center justify-center min-w-[120px] px-5 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 text-lg font-bold">
                                    OPEN
                                </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>

    </>
  );
}
