import "./css/Nav.css";
function Nav() {
  return (
    <div className="navbar">
      <div className="logo_area">
        <a href="/">로고 영역</a>
      </div>
      <div className="menu_area">
        <div className="menu">
          <a href="/">홈</a>
        </div>
        <div className="menu">
          <a href="/insert">지출 등록</a>
        </div>
        <div className="menu">
          <a href="/weekly">주간 지출</a>
        </div>
        <div className="menu">
          <a href="/monthly">월간 지출</a>
        </div>
      </div>
      <div className="login_area">로그인영역</div>
    </div>
  );
}

export default Nav;
