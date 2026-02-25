import ThemeToggle from "./components/theme-toggle";

const updates = [
  {
    date: "2026.02.25",
    title: "公式サイトを公開",
    body: "活動概要、参加方法、最新情報を1つのページに整理しました。",
  },
];

const activities = ["小規模 OSS / ツールの共同開発"];

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <header className="topbar">
        <a className="brand" href="#top">
          ArcoFilmx
        </a>
        <div className="topbar-right">
          <nav>
            <ul className="menu">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#activities">Activities</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#join">Join</a>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="content">
        <section className="hero panel">
          <p className="eyebrow">Group Website</p>
          <h1 className="hero-title">
            運用できる仕組みを、
            <br />
            着実に作る。
          </h1>
          <p className="lead">
            ArcoFilmx は、Web
            開発と運用自動化を中心に活動する技術コミュニティです。
            実案件で使える設計と実装を持ち寄り、検証結果を共有しています。
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#join">
              Join Us
            </a>
            <a className="btn btn-subtle" href="#news">
              View News
            </a>
          </div>
        </section>

        <section id="about" className="about-grid">
          <article className="panel tile">
            <p className="tile-label">Mission</p>
            <p className="tile-body">
              開発と運用の負荷を下げ、継続できるチーム開発の基盤を整えること。
            </p>
          </article>
          <article className="panel tile">
            <p className="tile-label">Focus</p>
            <p className="tile-body">
              Web 開発、CI/CD、監視設計、技術共有イベント運営。
            </p>
          </article>
          <article className="panel tile">
            <p className="tile-label">Approach</p>
            <p className="tile-body">
              小さく試し、記録して、改善を積み上げるスタイルで運営しています。
            </p>
          </article>
        </section>

        <section id="activities" className="activities-grid">
          <article className="panel activities">
            <h2>Main Activities</h2>
            <ul className="activity-list">
              {activities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article id="join" className="panel join">
            <h2>Join ArcoFilmx</h2>
            <p>
              エンジニアを中心に、デザイン・企画メンバーも歓迎。まずは見学参加から可能です。
            </p>
            {/* <a className="btn btn-primary" href="mailto:hello@arcofilmx.org"> */}
            <a className="btn btn-primary">Contact: N/A</a>
          </article>
        </section>

        <section id="news" className="news">
          <h2>Latest News</h2>
          <div className="news-list">
            {updates.map((item) => (
              <article className="panel news-item" key={item.title}>
                <time>{item.date}</time>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">© 2026 ArcoFilmx</footer>
    </div>
  );
}
