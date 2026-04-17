import styles from "./SpeculationRulesDemo.module.css";

export function SpeculationRulesDemo() {
  return (
    <div className={styles.wrap}>
      <section className={styles.section}>
        <h2 className={styles.heading}>どんな効果があるか</h2>
        <p className={styles.body}>
          <code className={styles.code}>type=&quot;speculationrules&quot;</code>{" "}
          の <code className={styles.code}>&lt;script&gt;</code>{" "}
          を <strong>通常は</strong>{" "}
          <code className={styles.code}>&lt;head&gt;</code>{" "}
          内に置き、ブラウザへ「どのリンクを先に準備してよいか」を JSON で渡します。
        </p>
        <p className={styles.body}>
          この例の <code className={styles.code}>prerender</code>{" "}
          は、条件に合うリンクについて、ポインタが近づいたりホバーしたりしたタイミングで
          <strong>遷移先のページを裏側で先に描画しておく</strong>
          、というヒントをブラウザに出します。ユーザーが実際に遷移したときの待ち時間を短くできることがあります（ブラウザ・設定・負荷次第）。
        </p>
        <p className={styles.aside}>
          このレシピのデモでは、隣のコード欄と同じ内容の{" "}
          <code className={styles.code}>&lt;script&gt;</code>{" "}
          をページの出力に含めています（本番では{" "}
          <code className={styles.code}>&lt;head&gt;</code>{" "}
          への配置が一般的です）。
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>コードの各記述</h2>
        <dl className={styles.defList}>
          <dt>
            <code className={styles.code}>prerender</code>
          </dt>
          <dd>
            投機の種類。プリフェッチより踏み込み、遷移先ドキュメントを裏で先に組み立てる方向のヒントです。
          </dd>
          <dt>
            <code className={styles.code}>href_matches: &quot;/*&quot;</code>
          </dt>
          <dd>
            どの URL のリンクが対象か。{" "}
            <code className={styles.code}>/*</code> は同一オリジン内のパスにマッチしやすい例です（サイトの URL 形に合わせて調整します）。
          </dd>
          <dt>
            <code className={styles.code}>where</code> 内の{" "}
            <code className={styles.code}>not</code> と{" "}
            <code className={styles.code}>selector_matches</code>
          </dt>
          <dd>
            投機したくないリンクを除外します。{" "}
            <code className={styles.code}>[rel~=nofollow]</code>・
            <code className={styles.code}>[rel~=external]</code>・
            <code className={styles.code}>[data-no-prerender]</code>{" "}
            に当てはまる <code className={styles.code}>&lt;a&gt;</code>{" "}
            はこのルールの対象外です。
          </dd>
          <dt>
            <code className={styles.code}>eagerness: &quot;moderate&quot;</code>
          </dt>
          <dd>
            いつ積極的に投機するかのヒント。{" "}
            <code className={styles.code}>moderate</code> は
            ホバーなどのユーザーの手がかりが付いたあたりから動きやすい、という意味合いです（最終判断はブラウザ側）。
          </dd>
        </dl>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>効果の確認方法</h2>
        <ol className={styles.steps}>
          <li>
            Chromium 系ブラウザで、このサイトの別ページへのリンクにカーソルを近づけたりホバーしたりする。
          </li>
          <li>
            DevTools を開き、<strong>Application</strong> パネル（名称はバージョンで多少違うことがあります）から{" "}
            <strong>Speculative loads</strong> など、投機的読み込みの一覧を表示する項目を探す。
          </li>
          <li>
            対象 URL が投機対象として現れるか、ネットワークで先読み・プリレンダーに伴うリクエストが増えるかを見る。
          </li>
        </ol>
        <p className={styles.note}>
          対応していないブラウザでは{" "}
          <code className={styles.code}>&lt;script&gt;</code>{" "}
          は無視されるだけです。フレームワークがクライアント遷移だけにしている場合は、体感への効き方が変わります。
        </p>
      </section>
    </div>
  );
}
