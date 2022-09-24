export default function Header() {
	return (
		<header>
			<title>ASRock X570 AQUA</title>

				<div className="moveableBookmark">
					<div className="LOGO"><a href="/">
							<img src="./images/nobackgroundlogo.png" style={{width:250, height:50}} alt="Gin Hardware icon" />
		</a>
				</div>
					<ul className="drop-down-menu">
						<li><a href="/">產品</a>
							<ul>
								<li>
									<a href="/">ASRock X570 AQUA</a>
									<ul>
										<li><a href="/">
											<img src="./images/product/X570-AQUA_box(L1).png" width="480" height="400" alt="" />
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li><a href="/">熱門活動</a></li>
						<li><a href="/">服務&社群</a></li>
						<li><a href="/">商店</a></li>
					</ul>
					<div className = "searchIcon">
						<img src="./images/search_icon.png" alt="" />
					</div><a href="/">
						<h1 className="login">登入</h1>
						</a>
				</div>
		</header>
	);
}
