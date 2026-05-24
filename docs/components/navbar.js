// 建立一個可以根據內外層自動判斷路徑的導覽列 OOP 函數
function loadNavbar(isSubPage = false) {
    // 根據是不是在 pages 資料夾內，自動切換前綴路徑
    const prefix = isSubPage ? "../" : "";
    
    // 這就是你原本的導覽列 HTML 骨架
    const navbarHTML = `
         <nav>
            <a href="../index.html" class="nav-logo">Violet✨</a>
            <div class="nav-links">
                <a href="about_me.html">About Me</a>  
                <a href="projects.html">Project</a> 
                <a href="../index.html#contact">Contact</a> 
            </div>
        </nav>
    `;
    
    // 把它塞進網頁中貼有 <div id="global-nav"> 標籤的地方
    document.getElementById('global-nav').innerHTML = navbarHTML;
}