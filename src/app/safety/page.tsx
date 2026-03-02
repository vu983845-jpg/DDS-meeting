
import React from 'react';

export default function Safety() {
    return (
        <>

            {/*  Header  */}
            <header className="bg-white border-b border-border-color h-16 flex-none sticky top-0 z-20 px-6 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3 text-primary">
                        <span className="material-symbols-outlined text-3xl">safety_check</span>
                        <h1 className="text-text-main text-lg font-bold tracking-tight">DDS Meeting</h1>
                    </div>
                    {/*  Navigation  */}
                    <nav className="hidden md:flex items-center gap-1">
                        <a className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary rounded-lg transition-colors" href="#">Dashboard</a>
                        <a className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary rounded-lg transition-colors" href="#">Vấn đề</a>
                        <a className="px-3 py-2 text-sm font-bold text-primary bg-primary/10 rounded-lg transition-colors" href="#">Cảnh báo an toàn</a>
                        <a className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary rounded-lg transition-colors" href="#">Báo cáo</a>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    {/*  Search  */}
                    <div className="relative hidden sm:block w-64">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-text-secondary">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </span>
                        <input className="w-full bg-white border-none rounded-lg py-2 pl-10 pr-4 text-sm text-text-main placeholder-text-secondary focus:ring-2 focus:ring-primary/20" placeholder="Tìm kiếm..." type="text" />
                    </div>
                    {/*  Notifications  */}
                    <button className="text-text-secondary hover:text-primary transition-colors p-2 rounded-full hover:bg-white relative">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border border-white"></span>
                    </button>
                    {/*  User Avatar  */}
                    <div className="h-9 w-9 rounded-full bg-cover bg-center border border-border-color cursor-pointer" data-alt="User Avatar" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCp2e3emBAfxRHDp3Jg_afltp9OOzaeLD6TPxsf1AzZP-gM7w9WJURlRy9lRgrch-vFXKRJGtGdYkg2zmM-0e4oJWPqfe0sSQnZXe5t7LTyNCnxvQrcLThEZNoKLxeqaFJV2r5DrvJht1C_DV0if_011NIS3cdfonXmsoc9azqzJUMCO5tACPLBLrHE5wi-j4gm-LbS-KRU-ReQ5O1s9feyGxk8vNd8BmHvejCa95J-OjRCm5azp75kid12mS0vvScQuRguBax4Jgo\')' }}></div>
                </div>
            </header>
            {/*  Main Content Area  */}
            <div className="flex flex-1 overflow-hidden relative">
                {/*  Left Side: Table & Filters  */}
                <main className="flex-1 overflow-y-auto p-6 scroll-smooth">
                    <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
                        {/*  Page Title & Toolbar  */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h2 className="text-2xl font-bold text-text-main">Quản lý Cảnh báo An toàn</h2>
                                <p className="text-text-secondary text-sm mt-1">Theo dõi và xử lý các vấn đề an toàn trong nhà máy</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="flex items-center gap-2 px-3 py-2 bg-white border border-border-color rounded-lg text-sm font-medium text-text-main hover:bg-white transition-colors shadow-sm">
                                    <span className="material-symbols-outlined text-[18px]">filter_list</span>
                                    <span>Lọc</span>
                                </button>
                                <button className="flex items-center gap-2 px-3 py-2 bg-white border border-border-color rounded-lg text-sm font-medium text-text-main hover:bg-white transition-colors shadow-sm">
                                    <span className="material-symbols-outlined text-[18px]">sort</span>
                                    <span>Sắp xếp</span>
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg text-sm font-bold transition-colors shadow-sm">
                                    <span className="material-symbols-outlined text-[20px]">add</span>
                                    <span>Thêm cảnh báo mới</span>
                                </button>
                            </div>
                        </div>
                        {/*  Stats Cards (Optional Context)  */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="bg-white p-4 rounded-xl border border-border-color shadow-sm flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium text-text-secondary uppercase">Tổng số cảnh báo</p>
                                    <p className="text-2xl font-bold text-text-main mt-1">124</p>
                                </div>
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                    <span className="material-symbols-outlined">analytics</span>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-border-color shadow-sm flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium text-text-secondary uppercase">Đang mở</p>
                                    <p className="text-2xl font-bold text-primary mt-1">8</p>
                                </div>
                                <div className="p-2 bg-red-50 text-primary rounded-lg">
                                    <span className="material-symbols-outlined">warning</span>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-border-color shadow-sm flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium text-text-secondary uppercase">Đang xử lý</p>
                                    <p className="text-2xl font-bold text-yellow-600 mt-1">12</p>
                                </div>
                                <div className="p-2 bg-yellow-50 text-yellow-600 rounded-lg">
                                    <span className="material-symbols-outlined">pending</span>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-border-color shadow-sm flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium text-text-secondary uppercase">Đã đóng (Tháng này)</p>
                                    <p className="text-2xl font-bold text-green-600 mt-1">45</p>
                                </div>
                                <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                                    <span className="material-symbols-outlined">check_circle</span>
                                </div>
                            </div>
                        </div>
                        {/*  Data Table  */}
                        <div className="bg-white rounded-xl border border-border-color shadow-sm overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm whitespace-nowrap">
                                    <thead className="bg-white border-b border-border-color text-text-secondary">
                                        <tr>
                                            <th className="px-6 py-3 font-semibold">ID</th>
                                            <th className="px-6 py-3 font-semibold">Ngày ghi nhận</th>
                                            <th className="px-6 py-3 font-semibold">Tên cảnh báo</th>
                                            <th className="px-6 py-3 font-semibold">Mức độ</th>
                                            <th className="px-6 py-3 font-semibold">Trạng thái</th>
                                            <th className="px-6 py-3 font-semibold">Người phụ trách</th>
                                            <th className="px-6 py-3 font-semibold">Hành động cần thiết</th>
                                            <th className="px-6 py-3 font-semibold text-right">Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border-color">
                                        {/*  Row 1  */}
                                        <tr className="hover:bg-white/50 transition-colors group">
                                            <td className="px-6 py-4 font-medium text-text-secondary">ST-001</td>
                                            <td className="px-6 py-4 text-text-main">24/05/2024</td>
                                            <td className="px-6 py-4 font-medium text-text-main">Tràn dầu khu vực A</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-primary">
                                                    Nghiêm trọng
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-primary border border-red-100">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                                    Mở
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-6 w-6 rounded-full bg-cover bg-center" data-alt="Avatar User 1" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuAj8SO3HCD5i91XEFegnW1xytbWQyJe9OFkAqeQaPrj_U-zXneZ4ikKsHDEOWnypz0ABApfHN3lCG_UrCZFw6LeD16lMW5TdFHLEqe3yMLSUXuI2zrjFmyfHGnDjVd2I8m7WuSMHrbTnWxBhtFZJtC6-puXXc0ATzoQc3MSoUv2PbRSuZi2cn1Vg-uLXV0szLQbpMluYvQylilkuBlMHC89J8wza1HShV2qGKpo6ZnbHF8crI54rH3ElZ1ulswbXHnno74xH2rQw_g\')' }}></div>
                                                    <span className="text-text-main">Nguyễn Văn A</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-text-secondary max-w-[200px] truncate">Cần dọn dẹp ngay lập tức để tránh trượt ngã</td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-text-secondary hover:text-primary transition-colors">
                                                    <span className="material-symbols-outlined">more_vert</span>
                                                </button>
                                            </td>
                                        </tr>
                                        {/*  Row 2  */}
                                        <tr className="hover:bg-white/50 transition-colors group">
                                            <td className="px-6 py-4 font-medium text-text-secondary">ST-002</td>
                                            <td className="px-6 py-4 text-text-main">23/05/2024</td>
                                            <td className="px-6 py-4 font-medium text-text-main">Dây điện hở máy CNC</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
                                                    Cao
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                    Đang xử lý
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-6 w-6 rounded-full bg-cover bg-center" data-alt="Avatar User 2" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBlcu7U1sfx8OHY41UeiUzbIcu5tX-q4-ZvxACbplddcpneDfSYIgws401MBGv6UAFrSbKhp_0dRnrPGfuxOBdEKWCOZdDbm-WEoFN5UjV87Y3mN5iNItjD5QukfUCCoyzmtCwz1a_1re5dZV5Ufa_IujrLdXEV3gqfpe7AhWkGj-kDP9EIs-A1bbEP1PDmueTo8E9FYXkqeCV3kP-7d_vUe_jHD6R0uMASooEYOOGsDR6s8so_rITyTo43Z2SZLR9dsZ4JbZU-OkU\')' }}></div>
                                                    <span className="text-text-main">Trần Thị B</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-text-secondary max-w-[200px] truncate">Thay dây mới và kiểm tra cách điện</td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-text-secondary hover:text-primary transition-colors">
                                                    <span className="material-symbols-outlined">more_vert</span>
                                                </button>
                                            </td>
                                        </tr>
                                        {/*  Row 3  */}
                                        <tr className="hover:bg-white/50 transition-colors group">
                                            <td className="px-6 py-4 font-medium text-text-secondary">ST-003</td>
                                            <td className="px-6 py-4 text-text-main">22/05/2024</td>
                                            <td className="px-6 py-4 font-medium text-text-main">Thiếu biển báo lối thoát</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                    Trung bình
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-primary border border-red-100">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                                    Mở
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-6 w-6 rounded-full bg-cover bg-center" data-alt="Avatar User 3" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBj9ijC86UJQ9QsjT6hKcZO_ztLGCi6GIEvJAL5RahPykVSq1JvDZAj4KT2Mqjm6mX6L-rcO91P6A29i3m7H_SOVFlCcfnhHFqtsjf_lZEkOeMmO9L_hdnubVm1VyofzNjNW0tNE5nkVAP1vz9odWn3XuyCd-eeNjC5MCr29VjSlUIAlsd_zllD_UoqYP3T3Dju6iapRGZQck6QiUyRYYlGozK5RObElyjKa2eY4J1GsQsMic-Xj89EDPkGeB0w9KLeXpofOLuuzgg\')' }}></div>
                                                    <span className="text-text-main">Lê Văn C</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-text-secondary max-w-[200px] truncate">Lắp đặt biển báo phản quang</td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-text-secondary hover:text-primary transition-colors">
                                                    <span className="material-symbols-outlined">more_vert</span>
                                                </button>
                                            </td>
                                        </tr>
                                        {/*  Row 4  */}
                                        <tr className="hover:bg-white/50 transition-colors group">
                                            <td className="px-6 py-4 font-medium text-text-secondary">ST-004</td>
                                            <td className="px-6 py-4 text-text-main">21/05/2024</td>
                                            <td className="px-6 py-4 font-medium text-text-main">Sàn trơn trượt kho B</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                    Thấp
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    Đã đóng
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500">
                                                        HT
                                                    </div>
                                                    <span className="text-text-main">Hoàng Tuấn</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-text-secondary max-w-[200px] truncate">Vệ sinh sàn</td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-text-secondary hover:text-primary transition-colors">
                                                    <span className="material-symbols-outlined">more_vert</span>
                                                </button>
                                            </td>
                                        </tr>
                                        {/*  Row 5  */}
                                        <tr className="hover:bg-white/50 transition-colors group">
                                            <td className="px-6 py-4 font-medium text-text-secondary">ST-005</td>
                                            <td className="px-6 py-4 text-text-main">20/05/2024</td>
                                            <td className="px-6 py-4 font-medium text-text-main">Lỗi cảm biến cửa</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
                                                    Cao
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    Đã đóng
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500">
                                                        MT
                                                    </div>
                                                    <span className="text-text-main">Minh Tú</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-text-secondary max-w-[200px] truncate">Bảo trì định kỳ</td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-text-secondary hover:text-primary transition-colors">
                                                    <span className="material-symbols-outlined">more_vert</span>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/*  Pagination  */}
                            <div className="px-6 py-4 border-t border-border-color flex items-center justify-between bg-white">
                                <p className="text-sm text-text-secondary">Hiển thị <span className="font-medium text-text-main">1</span> đến <span className="font-medium text-text-main">5</span> trong <span className="font-medium text-text-main">124</span> kết quả</p>
                                <div className="flex items-center gap-2">
                                    <button className="p-2 border border-border-color rounded-lg text-text-secondary hover:bg-white disabled:opacity-50">
                                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                                    </button>
                                    <button className="px-3 py-1.5 bg-primary text-white rounded-lg text-sm font-medium">1</button>
                                    <button className="px-3 py-1.5 text-text-main hover:bg-white rounded-lg text-sm font-medium">2</button>
                                    <button className="px-3 py-1.5 text-text-main hover:bg-white rounded-lg text-sm font-medium">3</button>
                                    <span className="px-2 text-text-secondary">...</span>
                                    <button className="p-2 border border-border-color rounded-lg text-text-secondary hover:bg-white">
                                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                {/*  Right Side Panel (Create Form)  */}
                <aside className="w-[480px] bg-white border-l border-border-color shadow-xl flex flex-col h-full absolute right-0 top-0 z-30 translate-x-0 transition-transform duration-300">
                    {/*  Header  */}
                    <div className="px-6 py-4 border-b border-border-color flex items-center justify-between bg-white">
                        <h3 className="text-lg font-bold text-text-main">Thêm cảnh báo an toàn mới</h3>
                        <button className="text-text-secondary hover:text-text-main p-1 rounded-md hover:bg-white transition-colors">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                    {/*  Scrollable Form Body  */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {/*  Trigger Name  */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-text-main block">Tên cảnh báo <span className="text-primary">*</span></label>
                            <input className="w-full rounded-lg border-border-color bg-white focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary text-sm p-2.5 placeholder-gray-400" placeholder="Ví dụ: Dây điện hở tại khu vực cắt" type="text" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {/*  Date  */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-text-main block">Thời gian phát hiện <span className="text-primary">*</span></label>
                                <input className="w-full rounded-lg border-border-color bg-white focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary text-sm p-2.5 text-text-main" type="datetime-local" />
                            </div>
                            {/*  Severity  */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-text-main block">Mức độ <span className="text-primary">*</span></label>
                                <div className="relative">
                                    <select className="w-full rounded-lg border-border-color bg-white focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary text-sm p-2.5 appearance-none text-text-main pr-8">
                                        <option>Thấp</option>
                                        <option>Trung bình</option>
                                        <option selected={true}>Cao</option>
                                        <option>Nghiêm trọng</option>
                                    </select>
                                    <span className="absolute right-2.5 top-2.5 text-text-secondary pointer-events-none">
                                        <span className="material-symbols-outlined text-[20px]">expand_more</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/*  Description  */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-text-main block">Mô tả chi tiết</label>
                            <textarea className="w-full rounded-lg border-border-color bg-white focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary text-sm p-2.5 placeholder-gray-400" placeholder="Mô tả hiện trạng, nguyên nhân sơ bộ..." rows={4}></textarea>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {/*  Dept/Area  */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-text-main block">Khu vực / Bộ phận</label>
                                <div className="relative">
                                    <select className="w-full rounded-lg border-border-color bg-white focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary text-sm p-2.5 appearance-none text-text-main pr-8">
                                        <option disabled={true} selected={true} value="">Chọn khu vực</option>
                                        <option>Kho A</option>
                                        <option>Kho B</option>
                                        <option>Xưởng sản xuất 1</option>
                                        <option>Khu vực đóng gói</option>
                                    </select>
                                    <span className="absolute right-2.5 top-2.5 text-text-secondary pointer-events-none">
                                        <span className="material-symbols-outlined text-[20px]">expand_more</span>
                                    </span>
                                </div>
                            </div>
                            {/*  Owner  */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-text-main block">Người phụ trách</label>
                                <div className="relative">
                                    <select className="w-full rounded-lg border-border-color bg-white focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary text-sm p-2.5 appearance-none text-text-main pr-8">
                                        <option disabled={true} selected={true} value="">Chọn nhân sự</option>
                                        <option>Nguyễn Văn A</option>
                                        <option>Trần Thị B</option>
                                        <option>Phòng Kỹ Thuật</option>
                                        <option>Phòng An Toàn</option>
                                    </select>
                                    <span className="absolute right-2.5 top-2.5 text-text-secondary pointer-events-none">
                                        <span className="material-symbols-outlined text-[20px]">expand_more</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/*  Action Required  */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-text-main block">Hành động cần thiết</label>
                            <textarea className="w-full rounded-lg border-border-color bg-white focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary text-sm p-2.5 placeholder-gray-400" placeholder="Các bước cần thực hiện để khắc phục..." rows={3}></textarea>
                        </div>
                        {/*  File Upload  */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-text-main block">Hình ảnh / Tài liệu đính kèm</label>
                            <div className="border-2 border-dashed border-border-color rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary/50 hover:bg-white transition-colors group/upload">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3 group-hover/upload:bg-white group-hover/upload:shadow-sm">
                                    <span className="material-symbols-outlined text-text-secondary group-hover/upload:text-primary">cloud_upload</span>
                                </div>
                                <p className="text-sm font-medium text-text-main">Nhấn để tải lên hoặc kéo thả vào đây</p>
                                <p className="text-xs text-text-secondary mt-1">SVG, PNG, JPG hoặc PDF (Tối đa 10MB)</p>
                            </div>
                        </div>
                    </div>
                    {/*  Footer  */}
                    <div className="p-6 border-t border-border-color bg-white flex items-center justify-end gap-3 sticky bottom-0">
                        <button className="px-5 py-2.5 rounded-lg border border-border-color text-text-main text-sm font-medium hover:bg-white transition-colors">
                            Hủy bỏ
                        </button>
                        <button className="px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-bold shadow-md hover:bg-primary-hover hover:shadow-lg transition-all flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">save</span>
                            Lưu cảnh báo
                        </button>
                    </div>
                </aside>
                {/*  Overlay for Side Panel (Optional but good for UX)  */}
                <div className="absolute inset-0 bg-black/20 z-20 backdrop-blur-[1px]"></div>
            </div>

        </>
    );
}
