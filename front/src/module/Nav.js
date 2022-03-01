import "./css/Nav.css";
function Nav() {
  return (
    <div className="navbar">
      <div className="logo_area">로고 영역</div>
      <div className="menu_area">
        <div className="menu">지출 관리</div>
        <div className="menu">지출 등록</div>
        <div className="menu">주간 지출</div>
        <div className="menu">월간 지출</div>
      </div>
      <div className="login_area">로그인영역</div>
    </div>
  );
}

export default Nav;
