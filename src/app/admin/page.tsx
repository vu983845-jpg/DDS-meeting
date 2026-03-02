
import React from 'react';

export default function Admin() {
  return (
    <>

      {/*  Top Navigation Bar  */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark px-6 py-3 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-3xl">grid_view</span>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">DDS Meeting</h2>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-1">
          <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary px-4 py-2 text-sm font-medium rounded-lg transition-colors" href="#">Bảng điều khiển</a>
          <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary px-4 py-2 text-sm font-medium rounded-lg transition-colors" href="#">Sự cố</a>
          <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary px-4 py-2 text-sm font-medium rounded-lg transition-colors" href="#">Cảnh báo</a>
          <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary px-4 py-2 text-sm font-medium rounded-lg transition-colors" href="#">Báo cáo</a>
          <a className="text-primary bg-primary/10 px-4 py-2 text-sm font-bold rounded-lg transition-colors" href="#">Cài đặt</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-700">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Admin HSE</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Quản trị viên</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center border-2 border-white dark:border-gray-800 shadow-sm" data-alt="User profile avatar of a smiling man" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ4-iCYvYsSsgEXxMvdIJgqBegScT2TBAVD_XH--nfQAfKAlO87523I8IhRgxpWLuX1uRnQxgMbzX9XRK_ZJiLA7LcQHde4Z7V05HkpHPW1bjVZr5plnHPyQI1mxnqumUHPKubTQwOchIQdAh4TaC6W-M4LUpJPwCGtUUMccDfswVMWMVgyTBtUO_rh_3NeBPwN8iW-0HZSCOLkBuWaOuKlhCsJUZ1MGS4YoTr63A_fiZMgDUrLt8DaEH1LY4-1mTGeJZ3YTvMGco\')' }}>
            </div>
          </div>
        </div>
      </header>
      {/*  Main Layout  */}
      <main className="flex-grow w-full max-w-[1440px] mx-auto p-6 md:p-8 lg:p-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start h-full">
          {/*  Sidebar Navigation  */}
          <aside className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-2">
            <div className="mb-4 px-2">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Cài đặt</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Quản lý hệ thống DDS</p>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-2 flex flex-col gap-1">
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-medium transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]">group</span>
                <span className="text-sm">Quản lý người dùng</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]">sell</span>
                <span className="text-sm">Mã lý do &amp; Mức độ</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]">settings</span>
                <span className="text-sm">Cài đặt hệ thống</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]">security</span>
                <span className="text-sm">Bảo mật &amp; Quyền</span>
              </a>
            </div>
          </aside>
          {/*  Main Content Area  */}
          <div className="flex-1 w-full bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col">
            {/*  Content Header  */}
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Danh sách người dùng</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Quản lý tài khoản và quyền truy cập vào hệ thống.</p>
              </div>
              <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm transition-colors group">
                <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">add</span>
                <span>Tạo người dùng</span>
              </button>
            </div>
            {/*  Filters & Search  */}
            <div className="px-6 py-4 bg-slate-50/50 dark:bg-slate-900/20 border-b border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
              <div className="relative flex-grow max-w-md">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
                <input className="w-full pl-10 pr-4 py-2 rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow" placeholder="Tìm kiếm theo tên hoặc email..." type="text" />
              </div>
              <select className="px-3 py-2 rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-sm text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-primary outline-none">
                <option value="">Tất cả bộ phận</option>
                <option value="safe">An toàn</option>
                <option value="prod">Sản xuất</option>
                <option value="quality">Chất lượng</option>
              </select>
              <select className="px-3 py-2 rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-sm text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-primary outline-none">
                <option value="">Tất cả trạng thái</option>
                <option value="active">Hoạt động</option>
                <option value="inactive">Đã khóa</option>
              </select>
            </div>
            {/*  Table  */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-gray-200 dark:border-gray-800 text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold tracking-wider">
                    <th className="px-6 py-4">Họ tên</th>
                    <th className="px-6 py-4 hidden sm:table-cell">Email</th>
                    <th className="px-6 py-4">Vai trò</th>
                    <th className="px-6 py-4 hidden md:table-cell">Bộ phận</th>
                    <th className="px-6 py-4">Trạng thái</th>
                    <th className="px-6 py-4 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {/*  Row 1  */}
                  <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">NA</div>
                        <div>
                          <p className="font-medium text-slate-900 dark:text-white text-sm">Nguyễn Văn A</p>
                          <p className="text-xs text-slate-500 sm:hidden">a.nguyen@dds.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden sm:table-cell text-sm text-slate-600 dark:text-slate-400">a.nguyen@dds.com</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                        Admin
                      </span>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell text-sm text-slate-600 dark:text-slate-400">An toàn (HSE)</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                        <span className="text-sm text-slate-700 dark:text-slate-300">Hoạt động</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-primary transition-colors p-1">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                    </td>
                  </tr>
                  {/*  Row 2  */}
                  <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">TB</div>
                        <div>
                          <p className="font-medium text-slate-900 dark:text-white text-sm">Trần Thị B</p>
                          <p className="text-xs text-slate-500 sm:hidden">b.tran@dds.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden sm:table-cell text-sm text-slate-600 dark:text-slate-400">b.tran@dds.com</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300">
                        Nhân viên
                      </span>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell text-sm text-slate-600 dark:text-slate-400">Sản xuất</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                        <span className="text-sm text-slate-700 dark:text-slate-300">Hoạt động</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-primary transition-colors p-1">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                    </td>
                  </tr>
                  {/*  Row 3  */}
                  <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">LC</div>
                        <div>
                          <p className="font-medium text-slate-900 dark:text-white text-sm">Lê Văn C</p>
                          <p className="text-xs text-slate-500 sm:hidden">c.le@dds.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden sm:table-cell text-sm text-slate-600 dark:text-slate-400">c.le@dds.com</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300">
                        Người xem
                      </span>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell text-sm text-slate-600 dark:text-slate-400">Chất lượng (QA)</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                        <span className="text-sm text-slate-700 dark:text-slate-300">Chờ kích hoạt</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-primary transition-colors p-1">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                    </td>
                  </tr>
                  {/*  Row 4  */}
                  <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-sm">PD</div>
                        <div>
                          <p className="font-medium text-slate-900 dark:text-white text-sm">Phạm Văn D</p>
                          <p className="text-xs text-slate-500 sm:hidden">d.pham@dds.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden sm:table-cell text-sm text-slate-600 dark:text-slate-400">d.pham@dds.com</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300">
                        Nhân viên
                      </span>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell text-sm text-slate-600 dark:text-slate-400">Bảo trì</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                        <span className="text-sm text-slate-500 dark:text-slate-400">Đã khóa</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-primary transition-colors p-1">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/*  Pagination  */}
            <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <p className="text-sm text-slate-500 dark:text-slate-400">Hiển thị <span className="font-medium text-slate-900 dark:text-white">1-4</span> trong <span className="font-medium text-slate-900 dark:text-white">24</span> người dùng</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm border border-gray-200 dark:border-gray-700 rounded-lg text-slate-500 disabled:opacity-50" disabled={true}>Trước</button>
                <button className="px-3 py-1 text-sm border border-gray-200 dark:border-gray-700 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Sau</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/*  Overlay Modal for Creating User  */}
      <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
        {/*  Modal Content  */}
        <div className="bg-surface-light dark:bg-surface-dark w-full max-w-lg rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden transform transition-all animate-fade-in-up">
          {/*  Modal Header  */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-800 bg-slate-50/50 dark:bg-slate-800/30">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Thêm người dùng mới</h3>
            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          {/*  Modal Body  */}
          <div className="p-6 space-y-5">
            {/*  Name Field  */}
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Tên người dùng</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">person</span>
                <input className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-sm" placeholder="Nhập họ và tên" type="text" />
              </div>
            </div>
            {/*  Email Field  */}
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">mail</span>
                <input className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-sm" placeholder="user@company.com" type="email" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/*  Role Dropdown  */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Vai trò</label>
                <select className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm text-slate-700 dark:text-slate-200">
                  <option>Nhân viên</option>
                  <option>Admin (Quản trị)</option>
                  <option>Người xem (Chỉ xem)</option>
                </select>
              </div>
              {/*  Department Dropdown  */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Bộ phận</label>
                <select className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm text-slate-700 dark:text-slate-200">
                  <option>An toàn</option>
                  <option>Sản xuất</option>
                  <option>Chất lượng</option>
                  <option>Bảo trì</option>
                  <option>Kho vận</option>
                </select>
              </div>
            </div>
            {/*  Toggle Switch  */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Gửi email kích hoạt</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Người dùng sẽ nhận link đặt lại mật khẩu</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input checked={true} className="sr-only peer" type="checkbox" value="" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
          {/*  Modal Footer  */}
          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-gray-100 dark:border-gray-800 flex justify-end gap-3">
            <button className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              Hủy bỏ
            </button>
            <button className="px-4 py-2 rounded-lg text-sm font-bold text-white bg-primary hover:bg-primary-hover shadow-md transition-all hover:shadow-lg">
              Lưu người dùng
            </button>
          </div>
        </div>
      </div>

    </>
  );
}
