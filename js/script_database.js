const FURNITURE_ITEMS = [
  {
    id: 1,
    name: 'Ruby Red Comfort Chair', 
    description1: '情熱と活力の象徴である赤い色調が特徴の「Ruby Red Comfort Chair」は、あなたの空間にポップなアクセントを加えます。', 
    description2: '快適な座り心地と耐久性を兼ね備えたこの椅子は、細部までこだわったデザインと質感で、あらゆるインテリアにマッチします。',
    price: 30000,
    size_W: 70,
    size_D: 65,
    size_H: 80,
    color: 'ルビーレッド',
    material: 'ポリエステル混紡ファブリック'
  },
  {
    id: 2, 
    name: 'Sunshine Comfort', 
    description1: '心地よい座り心地と鮮やかな色彩が特徴の「Sunshine Comfort」は、あなたの空間を明るく活気付けます。これは、快適さとスタイルを一体化した理想的な椅子です。', 
    description2: 'シンプルでありながらも、耐久性のある素材と優れたデザインにより、長時間の使用でも快適さを保つことができます。黄色の色調が、どんなインテリアにもポップなアクセントを加えます。',
    price: 15000,
    size_W: 80,
    size_D: 70,
    size_H: 85,
    color: '鮮やかな黄色',
    material: 'ポリエステル混紡ファブリック'
  },
  {
    id: 3,
    name: 'Verdant Oasis Sofa', 
    description1: '緑豊かなオアシスを思わせるソファ。あなたのリビングスペースに自然と穏やかさをもたらします。', 
    description2: 'フォルムとファブリックの質感が一体となり、心地良いリラクゼーション時間を提供します。',
    price: 60000,
    size_W: 200,
    size_D: 85,
    size_H: 85,
    color: '緑',
    material: '布、木製'
  },
  {
    id: 4,
    name: 'Mint Breeze Sofa', 
    description1: '春の新緑を思わせるミント色のソファ。清々しい色合いがリビングを明るく彩ります。', 
    description2: '心地よいファブリックと独特のフォルムが、あなたのリラクゼーションタイムをより特別なものにします。',
    price: 65000,
    size_W: 200,
    size_D: 85,
    size_H: 85,
    color: 'ミント',
    material: '布、木製'
  },
  {
    id: 5,
    name: 'Pink Whisper Sofa', 
    description1: '優しく穏やかな雰囲気を醸し出す薄ピンク色のソファ。リビングルームに上品な色彩を添えます。', 
    description2: '柔らかな質感と、シンプルながらも洗練されたデザインが、リラックスした時間を贈ります。',
    price: 70000,
    size_W: 200,
    size_D: 85,
    size_H: 85,
    color: '薄ピンク',
    material: '布、木製'
  },
  {
    id: 6,
    name: 'Black Pearl Bed', 
    description1: '高級感あふれるブラックカラーの大型ベッド。上質な素材を使用し、最高の睡眠環境を提供します。', 
    description2: '広々としたスペースと快適なマットレスが、深い眠りをサポート。毎晩のリラクゼーションタイムを豊かに彩ります。',
    price: 120000,
    size_W: 220,
    size_D: 200,
    size_H: 55,
    color: '黒',
    material: '木製、布製'
  },
  {
    id: 7,
    name: 'Cozy Caramel Chair', 
    description1: '温かみのあるカラメル色が特徴のコンパクトチェア。どんなインテリアにもフィットするヴィンテージ感が魅力です。', 
    description2: '小さめのサイズながらもしっかりとした座り心地があり、長時間の使用でも疲れにくい設計となっています。',
    price: 15000,
    size_W: 45,
    size_D: 45,
    size_H: 80,
    color: '茶色',
    material: '木製、布製'
  },
  {
    id: 8,
    name: 'Sparkle Wash', 
    description1: '快適なランドリータイムをサポートする洗濯機。洗濯物をデリケートに且つしっかりと洗浄します。', 
    description2: 'エネルギー効率と操作性に優れ、洗濯の手間を減らし、あなたの時間を有意義に使うことをサポートします。',
    price: 50000,
    size_W: 60,
    size_D: 55,
    size_H: 85,
    color: '白',
    material: '金属、プラスチック'
  },
  {
    id: 9,
    name: 'Petit Perch Stool',
    description1: 'シンプルでありながら機能性に優れた小型スツール。どんな空間にもフィットします。', 
    description2: 'コンパクトなサイズながらもしっかりと体を支え、座り心地の良さを実現。使わない時はすっきりと収納可能です。',
    price: 7000,
    size_W: 30,
    size_D: 30,
    size_H: 45,
    color: '自然木色',
    material: '木製'
  },
  {
    id: 10,
    name: 'Jet Black Hanger',
    description1: 'スタイリッシュな黒色のハンガー。クローゼットの中をスマートに整理します。', 
    description2: '洋服を優しく守りながら、見た目もスッキリ。高品質な素材で長持ちする設計となっています。',
    price: 1000,
    size_W: 42,
    size_D: 1,
    size_H: 20,
    color: '黒',
    material: '木製、塗装'
  },
  {
    id: 11,
    name: 'Ebony Glow Electric Stand',
    description1: '洗練された黒の電気スタンド。その光は、どんな部屋も暖かく、居心地の良い空間に変えます。', 
    description2: 'モダンなデザインと省エネ設計が融合。あなたの生活に品格と快適さをプラスします。',
    price: 25000,
    size_W: 30,
    size_D: 30,
    size_H: 100,
    color: '黒',
    material: '金属'
  },
  {
    id: 12,
    name: 'Snowy Petal Table',
    description1: 'クリーンでフレッシュな白い小型テーブル。お部屋に明るさと広がりを加えます。', 
    description2: 'コンパクトながらも安定感があり、さまざまな用途に使用できます。読書、食事、お茶うけとして最適です。',
    price: 18000,
    size_W: 60,
    size_D: 60,
    size_H: 50,
    color: '白',
    material: '木製'
  },
  {
    id: 13,
    name: 'Blush Grain Cooker',
    description1: '愛らしいピンク色の炊飯器。見た目も機能性も両立した、キッチンの新たなスタープレーヤー。', 
    description2: '各種炊飯モードを搭載し、あなたのご飯炊きを完璧にサポート。炊きたてのご飯をいつでも楽しめます。',
    price: 15000,
    size_W: 30,
    size_D: 35,
    size_H: 25,
    color: 'ピンク',
    material: '金属、プラスチック'
  },
  {
    id: 14,
    name: 'Silver Stream Cooker',
    description1: '高級感あふれる銀色の炊飯器。洗練されたデザインと最先端の技術が融合しています。', 
    description2: '一緒に炊くことでさまざまな料理を作ることができ、時間とエネルギーを節約します。美味しいご飯を炊くことがこの上なく簡単になります。',
    price: 20000,
    size_W: 30,
    size_D: 35,
    size_H: 25,
    color: '銀',
    material: '金属、プラスチック'
  },
  {
    id: 15,
    name: 'HydrateMax Humidifier',
    description1: '高機能な加湿器で乾燥と戦いましょう。これ一台で部屋全体に湿度を適度に保つことが可能です。', 
    description2: '静音設計で寝ている間も安心。タイマーや省エネモードも搭載、使い勝手がよく便利です。',
    price: 30000,
    size_W: 25,
    size_D: 25,
    size_H: 35,
    color: '白',
    material: 'プラスチック'
  },
  {
    id: 16,
    name: 'StyleMist Humidifier',
    description1: 'シックなデザインが魅力的な加湿器。インテリアとしても一役買います。', 
    description2: '見た目だけでなく、機能性も抜群。省エネ性と長時間稼働が可能で、理想的な室内環境を作ります。',
    price: 35000,
    size_W: 30,
    size_D: 30,
    size_H: 40,
    color: '白',
    material: 'プラスチック'
  },
]