
import '@/styles/global.css';
export default function car_id() {
    return (
        <div className="container" >

            <h1><i className="fas fa-car"></i> تحقق من بيانات السيارة</h1>
            <p>قبل شراء سيارة، تحقق من حالتها باستخدام رقم الشاصي.</p>
            <div className="search-box">
                <input type="text" id="vin" placeholder="أدخل رقم الشاصي هنا" />
            </div>




        </div >

    );
};

