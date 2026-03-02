
import React from 'react';

export default function Issues() {
  return (
    <>

{/*  Header  */}
<header className="sticky top-0 z-30 flex items-center justify-between whitespace-nowrap border-b border-border-color bg-surface-light dark:bg-surface-dark px-6 py-3 shadow-sm">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3 text-primary">
<div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
<span className="material-symbols-outlined">precision_manufacturing</span>
</div>
<h2 className="text-text-main dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">DDS Meeting</h2>
</div>
<nav className="hidden md:flex items-center gap-1">
<a className="text-text-secondary hover:text-primary hover:bg-red-50 dark:hover:bg-red-900/20 px-3 py-2 rounded-lg text-sm font-medium transition-colors" href="#">Dashboard</a>
<a className="text-primary bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded-lg text-sm font-medium transition-colors" href="#">Issues</a>
<a className="text-text-secondary hover:text-primary hover:bg-red-50 dark:hover:bg-red-900/20 px-3 py-2 rounded-lg text-sm font-medium transition-colors" href="#">Safety Trigger</a>
<a className="text-text-secondary hover:text-primary hover:bg-red-50 dark:hover:bg-red-900/20 px-3 py-2 rounded-lg text-sm font-medium transition-colors" href="#">Reports</a>
</nav>
</div>
<div className="flex flex-1 justify-end gap-6 items-center">
<div className="relative hidden sm:block w-full max-w-xs">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary">
<span className="material-symbols-outlined text-[20px]">search</span>
</div>
<input className="block w-full rounded-lg border-border-color bg-gray-50 dark:bg-gray-800 dark:border-gray-700 py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-primary focus:ring-primary sm:text-sm transition-shadow" placeholder="Search issues, machines..." type="text"/>
</div>
<div className="flex items-center gap-3">
<button className="relative p-2 text-text-secondary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-1.5 right-1.5 size-2 bg-primary rounded-full ring-2 ring-white dark:ring-surface-dark"></span>
</button>
<div className="bg-gray-200 bg-center bg-no-repeat bg-cover rounded-full size-9 ring-2 ring-white dark:ring-gray-700 cursor-pointer" data-alt="User profile picture" style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuAiComKQTZ1vfMJgttry7j80n5bhhj7z7Isj4c1EPSQMj5WhzHXTf5UYz4k2ARdDZrjn-QGJ8_zEHGiYEoRA9FSqoa5fupc6RPXzf8MWbqEZIPfM0wWQElcix253P6GlDpk28nmHW7q6jEe5Kxepro51jjA7Tr4rmx4kSQ3VzD8swrwZf-7HJlDoyEXoJTnbaD01TlsiGxL8Me02kcwwaK2XFdri-AeWBFkDioUdavqZuWZ_g-Y85S2SoBLO7p3eFBBrnWN6XVokZA\')'}}></div>
</div>
</div>
</header>
{/*  Main Content Area  */}
<div className="flex flex-1 overflow-hidden relative">
{/*  Left Side: Table & Filters  */}
<main className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark w-full md:pr-[400px]"> {/*  Added padding right to accommodate sidebar on large screens if desired, or keep it overlay  */}
{/*  Page Header  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5">
<div className="flex flex-col gap-1">
<h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Issues Management</h1>
<p className="text-sm text-text-secondary dark:text-slate-400">Track and resolve daily manufacturing bottlenecks</p>
</div>
<button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition-colors">
<span className="material-symbols-outlined text-[20px]">add</span>
                    New Issue
                </button>
</div>
{/*  Filters Bar  */}
<div className="px-6 pb-4">
<div className="flex flex-col xl:flex-row gap-3 items-start xl:items-center justify-between bg-surface-light dark:bg-surface-dark p-3 rounded-xl border border-border-color shadow-sm">
<div className="flex flex-wrap gap-2 items-center w-full">
{/*  Saved Views  */}
<div className="relative group">
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-text-secondary hover:text-primary bg-gray-50 hover:bg-red-50 dark:bg-gray-800 dark:hover:bg-red-900/20 rounded-md border border-transparent hover:border-red-100 transition-all">
<span className="material-symbols-outlined text-[18px]">bookmark</span>
<span>My Default View</span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</button>
</div>
<div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-1 hidden sm:block"></div>
{/*  Filter Buttons  */}
<button className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
<span>Last 7 Days</span>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary transition-colors">
<span>Department</span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary transition-colors">
<span>Machine</span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary transition-colors">
<span>Status</span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</button>
</div>
<div className="flex items-center gap-2 ml-auto shrink-0 pt-2 xl:pt-0">
<button className="text-sm text-text-secondary hover:text-primary font-medium px-3">Clear all</button>
<button className="text-sm bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-700 px-4 py-1.5 rounded-md font-medium transition-colors">Apply Filters</button>
</div>
</div>
</div>
{/*  Table Container  */}
<div className="flex-1 overflow-auto px-6 pb-6">
<div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-color shadow-sm min-w-[1000px]">
<table className="w-full text-left border-collapse">
<thead className="bg-gray-50 dark:bg-gray-800/50 text-xs uppercase text-text-secondary font-semibold sticky top-0 z-10">
<tr>
<th className="px-6 py-4 border-b border-border-color w-24">ID</th>
<th className="px-6 py-4 border-b border-border-color w-32">Date</th>
<th className="px-6 py-4 border-b border-border-color">Dept</th>
<th className="px-6 py-4 border-b border-border-color">Machine</th>
<th className="px-6 py-4 border-b border-border-color">Reason</th>
<th className="px-6 py-4 border-b border-border-color w-28">Duration</th>
<th className="px-6 py-4 border-b border-border-color w-32">Impact</th>
<th className="px-6 py-4 border-b border-border-color w-32">Status</th>
<th className="px-6 py-4 border-b border-border-color w-20">Owner</th>
<th className="px-6 py-4 border-b border-border-color w-20 text-right">Actions</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-border-color">
{/*  Row 1  */}
<tr className="group hover:bg-red-50/50 dark:hover:bg-red-900/10 transition-colors cursor-pointer">
<td className="px-6 py-4 font-medium text-primary">#1024</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">Oct 24, 08:30</td>
<td className="px-6 py-4 text-slate-900 dark:text-slate-100 font-medium">Assembly</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">Line 3</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">Jam in feeder</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">45 min</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                                        High
                                    </span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
<span className="size-1.5 rounded-full bg-primary"></span>
                                        Open
                                    </span>
</td>
<td className="px-6 py-4">
<div className="size-8 rounded-full bg-gray-200 bg-center bg-cover border border-white dark:border-gray-600" data-alt="Owner avatar" style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuByOoNyVGs7pg6DHIDOghBNxctROqUsnart8k6Fd7yDzW_UKGXoLlRiUYFystxtzt2YMNp_jkT3ZbxwlYc-97a7d_sTzeeBOjgsTx2yOVimIK01-7kU2jsius5SuPBZmsiazkD8T1lHEVh4eQs42JX4tNnHT-SQ08qyelIcsefZFLRWjVX3GUJouIsFE4XtFc2flxKFiD-Eg_RIsLP5BLucP9Lt6au8s-27Vw0s4XTDCI1zOlzRIDgjDatn4A9Ro2nSFdcEyHlWeMk\')'}}></div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
{/*  Row 2  */}
<tr className="group hover:bg-red-50/50 dark:hover:bg-red-900/10 transition-colors cursor-pointer">
<td className="px-6 py-4 font-medium text-primary">#1023</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">Oct 24, 07:15</td>
<td className="px-6 py-4 text-slate-900 dark:text-slate-100 font-medium">Packaging</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">Packer 1</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">Material shortage</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">15 min</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                                        Medium
                                    </span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-800">
                                        Resolved
                                    </span>
</td>
<td className="px-6 py-4">
<div className="size-8 rounded-full bg-gray-200 bg-center bg-cover border border-white dark:border-gray-600" data-alt="Owner avatar" style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBtl-hTnc6mJae2osGDurTbGTs9BIG5aXl8loL85ojYKPwa8eFVEECHFn8rNIeWnpROyhs0IQI4UlQz7zuRFZxTCGojGbPKXlBVkVu8Sb1fM1UC3D06gIAAeWsWWe-lImkOgE2P1ORHUtXdn8gkryDk-5JeSt406IwDum6k9VanLHCRbg6DB2bGK6I01ZApa6Gyj8P0EypYgoB1K63P6SQlk1LHAZCAr1LLtiC-kSdmS8YlWO7CpqX7IHo3ekWam1OwytZFjFiljgw\')'}}></div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
{/*  Row 3  */}
<tr className="group hover:bg-red-50/50 dark:hover:bg-red-900/10 transition-colors cursor-pointer bg-red-50/30 dark:bg-red-900/5">
<td className="px-6 py-4 font-medium text-primary">#1022</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">Oct 23, 14:45</td>
<td className="px-6 py-4 text-slate-900 dark:text-slate-100 font-medium">Quality</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">Insp 2</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">Defect detected</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">30 min</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                                        Medium
                                    </span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
<span className="size-1.5 rounded-full bg-primary"></span>
                                        Open
                                    </span>
</td>
<td className="px-6 py-4">
<div className="size-8 rounded-full bg-gray-200 bg-center bg-cover border border-white dark:border-gray-600" data-alt="Owner avatar" style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCVR-CUH8MB2ydClayi2d68uZuPuGEyClU9CPUU9VgNS6ujBkbjO_vQ-pS4qmBoSwg9B4JM2wCHu1C1FiZB2AWmpP8SICf_PXsAqKRh0GT-nxa-qWV407W3VD9tSp2nG5GMoWzYnIFs8cOfjxMnxn9BLEfOe60Y8XxlbbxAnC2bjhAD5iZ_kXBYqSS3hJcv88LxFBpUgaKrIDCEIUMrL88gACqBEeeoCN4rbbyj_K3z8L132nycFbG61aagSVBk_-qQ8SU0_zGPeuk\')'}}></div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
{/*  Row 4  */}
<tr className="group hover:bg-red-50/50 dark:hover:bg-red-900/10 transition-colors cursor-pointer">
<td className="px-6 py-4 font-medium text-primary">#1021</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">Oct 23, 11:20</td>
<td className="px-6 py-4 text-slate-900 dark:text-slate-100 font-medium">Assembly</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">Line 1</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">Sensor misalignment</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">10 min</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                        Low
                                    </span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                                        Closed
                                    </span>
</td>
<td className="px-6 py-4">
<div className="size-8 rounded-full bg-gray-200 bg-center bg-cover border border-white dark:border-gray-600" data-alt="Owner avatar" style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuAzwJM-nM0dB0kW2nEJDVe_lEev_tTTmmZEYV7KO43EjO1ratrUZ-egnxOh9TK7uVRoUxQqsbZw1B9yLlNAsIucQC6iGwiRjzR5CaSClqBs25PlORevCRGxR2m0LtafaRAcpoVE3UsrhSH4crwgDbmWfgcQWzlnFWJ05RfSy_fNkh6VO_NjwwKjJpuv0OiXnMPvwapJlhXFakx2b9gyndXXBydyHajN_bYgMaIU19Nb4qnn8vybju_sKaErav2Xf3I-7Tri4Aq5x7w\')'}}></div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
{/*  Row 5  */}
<tr className="group hover:bg-red-50/50 dark:hover:bg-red-900/10 transition-colors cursor-pointer">
<td className="px-6 py-4 font-medium text-primary">#1020</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">Oct 22, 16:00</td>
<td className="px-6 py-4 text-slate-900 dark:text-slate-100 font-medium">Logistics</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">Forklift B</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">Battery Failure</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">60 min</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                                        High
                                    </span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
<span className="size-1.5 rounded-full bg-primary"></span>
                                        Open
                                    </span>
</td>
<td className="px-6 py-4">
<div className="flex items-center justify-center size-8 rounded-full bg-gray-100 border border-white dark:border-gray-600 text-xs font-medium text-gray-600">JD</div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Pagination  */}
<div className="flex items-center justify-between py-4">
<div className="text-sm text-text-secondary">
                        Showing <span className="font-medium text-slate-900 dark:text-slate-100">1</span> to <span className="font-medium text-slate-900 dark:text-slate-100">5</span> of <span className="font-medium text-slate-900 dark:text-slate-100">24</span> results
                    </div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg border border-border-color bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 text-text-secondary disabled:opacity-50">
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
<button className="px-3.5 py-2 rounded-lg bg-primary text-white text-sm font-medium">1</button>
<button className="px-3.5 py-2 rounded-lg border border-border-color bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors">2</button>
<button className="px-3.5 py-2 rounded-lg border border-border-color bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors">3</button>
<span className="px-2 text-text-secondary">...</span>
<button className="p-2 rounded-lg border border-border-color bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 text-text-secondary">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</div>
</div>
</div>
</main>
{/*  Slide-out Detail Panel (Overlay)  */}
<aside className="absolute top-0 right-0 h-full w-[400px] bg-surface-light dark:bg-surface-dark border-l border-border-color shadow-2xl z-20 overflow-y-auto flex flex-col">
{/*  Panel Header  */}
<div className="p-6 border-b border-border-color sticky top-0 bg-surface-light dark:bg-surface-dark z-10">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-primary">Issue #1024</span>
<button className="text-text-secondary hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-3">Jam in feeder causing line stoppage</h3>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-white">
                        Open
                    </span>
<div className="h-4 w-px bg-gray-300 dark:bg-gray-700"></div>
<div className="flex items-center gap-2 text-sm text-text-secondary">
<span className="material-symbols-outlined text-[18px]">schedule</span>
<span>45m duration</span>
</div>
</div>
</div>
{/*  Panel Content  */}
<div className="flex-1 p-6 space-y-8">
{/*  Details Grid  */}
<div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm">
<div className="flex flex-col gap-1">
<span className="text-text-secondary text-xs uppercase font-medium">Machine</span>
<span className="font-medium text-slate-900 dark:text-slate-100">Line 3 - Conveyor</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-text-secondary text-xs uppercase font-medium">Department</span>
<span className="font-medium text-slate-900 dark:text-slate-100">Assembly</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-text-secondary text-xs uppercase font-medium">Impact</span>
<span className="text-red-600 font-medium">High Impact</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-text-secondary text-xs uppercase font-medium">Assigned To</span>
<div className="flex items-center gap-2">
<div className="size-5 rounded-full bg-gray-200 bg-center bg-cover" data-alt="Assignee avatar" style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCI4F8A6vWAbtJt2K7-EkkKcpB8mQp_5tix371bv80BslX00A4_IfxDeE2FhwcE377hNe_LsBWtg3-cQwnwrgx0lBNItUilkvvZmCFmUMAFXNsVFBi_b3pT43x8sQO_4386Owibnwn0vW-TfyQ8nnwPJncbaoQsMG_xsbajiBNps7XNmS27RCbERghYPVtsa-mFuFadbKnhnfBNConyZ_e0GDtINikZwJXMRjt8RmA0vR8GOv4xIr1_pT7L0r7FNb2QYZjoURLH95Q\')'}}></div>
<span className="font-medium text-slate-900 dark:text-slate-100">Alex M.</span>
</div>
</div>
</div>
{/*  Description  */}
<div>
<h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">Description</h4>
<p className="text-sm text-text-secondary leading-relaxed">
                         The main feeder belt jammed due to excessive material load. Sensors failed to trigger the early warning system. Maintenance required to clear jam and reset sensors.
                     </p>
</div>
{/*  Attachments  */}
<div>
<h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center justify-between">
                         Attachments
                         <button className="text-primary text-xs font-medium hover:underline">+ Add</button>
</h4>
<div className="flex gap-3">
<div className="size-20 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
<div className="text-center">
<span className="material-symbols-outlined text-gray-400">image</span>
</div>
</div>
<div className="size-20 rounded-lg bg-gray-100 border border-gray-200 bg-center bg-cover cursor-pointer hover:opacity-80 transition-opacity" data-alt="Machine part close-up" style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuB5FLgdFU0hibuUOFeye5s--H0fK_eOfDWOTGSokGl1gFVii0RkUjKoOeJYM78azrT-4-qzeuFFk7lQVKRnivoJ3araGdoYQKxDuG-3K3fQTgG8uXvt7TvGqYll3S6NT3Qb05Ke28t8OEIv_fAimFTEvaOYezdPXthhNAiOvFf07YRCr6N6WuohLCmisJsaSOslglRNm5QcX_Tb33st2lbicd0ZqsC3v69n-01kkKc7rVBlCxcgEpoUP4PiklT7IfiFeCIkgLJuelU\')'}}></div>
</div>
</div>
{/*  Activity Timeline  */}
<div>
<h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-4">Activity Timeline</h4>
<div className="relative pl-4 border-l-2 border-gray-100 dark:border-gray-800 space-y-6">
{/*  Timeline Item 1  */}
<div className="relative">
<div className="absolute -left-[21px] top-0 size-3 rounded-full bg-primary ring-4 ring-white dark:ring-surface-dark"></div>
<div className="flex flex-col gap-1">
<span className="text-xs text-text-secondary">Today, 09:15 AM</span>
<p className="text-sm text-slate-900 dark:text-slate-100"><span className="font-medium">Alex M.</span> added a note.</p>
<div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-sm text-text-secondary mt-1 border border-gray-100 dark:border-gray-700">
                                    Parts ordered. ETA 2 hours.
                                </div>
</div>
</div>
{/*  Timeline Item 2  */}
<div className="relative">
<div className="absolute -left-[21px] top-0 size-3 rounded-full bg-gray-300 dark:bg-gray-600 ring-4 ring-white dark:ring-surface-dark"></div>
<div className="flex flex-col gap-1">
<span className="text-xs text-text-secondary">Today, 08:30 AM</span>
<p className="text-sm text-slate-900 dark:text-slate-100">Issue created automatically by <span className="font-medium">System Monitor</span>.</p>
</div>
</div>
</div>
</div>
</div>
{/*  Panel Footer Actions  */}
<div className="p-4 border-t border-border-color bg-gray-50 dark:bg-gray-800/50 mt-auto flex flex-col gap-3">
<div className="flex gap-2">
<input className="flex-1 text-sm rounded-md border-border-color bg-white dark:bg-surface-dark focus:border-primary focus:ring-primary px-3 py-2" placeholder="Type a note..." type="text"/>
<button className="p-2 bg-white border border-border-color rounded-md hover:bg-gray-50 text-text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">send</span>
</button>
</div>
<div className="flex gap-3">
<button className="flex-1 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-primary transition-colors">Edit Issue</button>
<button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark shadow-sm transition-colors">Close Issue</button>
</div>
</div>
</aside>
</div>

    </>
  );
}
