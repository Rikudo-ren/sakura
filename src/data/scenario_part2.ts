import { Scene } from '../types';

export const scenarioPart2: Record<string, Scene> = {
  // ===== 第三章: 昼食と、オリオン座と、波動関数の話 =====
  "ch3_001": {
    id: "ch3_001",
    type: "narration",
    text: "【第三章】\n「昼食と、オリオン座と、波動関数の話」\n時期：高校二年・五月〜六月",
    bg: "classroom_morning",
    bgm: "lunch",
    next: "ch3_002"
  },
  "ch3_002": {
    id: "ch3_002",
    type: "narration",
    text: "三峰の作戦ノートは、二ページ目に入っていた。\n「作戦2：昼食に誘う」",
    bg: "classroom_morning",
    next: "choice_c1"
  },
  "choice_c1": {
    id: "choice_c1",
    type: "choice",
    text: "内藤をどうやって昼食に誘う？",
    bg: "classroom_morning",
    choices: [
      {
        text: "A. 直接誘う（「よかったら一緒にお昼食べませんか」）",
        next: "c1_route_a",
        flagChanges: { ran_koukan: 3 }
      },
      {
        text: "B. 三峰に同行してもらいグループで誘う",
        next: "c1_route_b",
        flagChanges: { mimine_flag: 2 }
      },
      {
        text: "C. 機会を窺ってタイミングを計算する",
        next: "c1_route_c",
        flagChanges: { riron_izon: 2 }
      }
    ]
  },

  // C1_ROUTE_A
  "c1_route_a": {
    id: "c1_route_a",
    type: "narration",
    text: "【昼休み。廊下で内藤に声をかける。】",
    bg: "hallway_south",
    next: "c1_route_a_2"
  },
  "c1_route_a_2": {
    id: "c1_route_a_2",
    type: "dialogue",
    speaker: "櫻優",
    text: "内藤さん、よかったら一緒にお昼食べませんか",
    bg: "hallway_south",
    next: "c1_route_a_3"
  },
  "c1_route_a_3": {
    id: "c1_route_a_3",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "surprised",
    text: "いいよ",
    bg: "hallway_south",
    next: "c1_route_a_4"
  },
  "c1_route_a_4": {
    id: "c1_route_a_4",
    type: "narration",
    text: "あっさり了承された。心臓が止まりそうだった。\n\n【昼食中。窓際の席。】",
    bg: "cafeteria",
    next: "c1_route_a_5"
  },
  "c1_route_a_5": {
    id: "c1_route_a_5",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "normal",
    text: "櫻くんって、よく理数科の教室行くよね",
    bg: "cafeteria",
    next: "c1_route_a_6"
  },
  "c1_route_a_6": {
    id: "c1_route_a_6",
    type: "dialogue",
    speaker: "櫻優",
    text: "はい。研究で——恋愛学の研究をしていて、理数科の方々に相談することがあります",
    bg: "cafeteria",
    next: "c1_route_a_7"
  },
  "c1_route_a_7": {
    id: "c1_route_a_7",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "恋愛学？",
    bg: "cafeteria",
    next: "c1_route_a_8"
  },
  "c1_route_a_8": {
    id: "c1_route_a_8",
    type: "dialogue",
    speaker: "櫻優",
    text: "人間の感情的結合 of 構造を研究しています",
    bg: "cafeteria",
    next: "c1_route_a_9"
  },
  "c1_route_a_9": {
    id: "c1_route_a_9",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "面白い考え方だね",
    bg: "cafeteria",
    next: "c1_route_a_10"
  },
  "c1_route_a_10": {
    id: "c1_route_a_10",
    type: "narration",
    text: "……また言った。怒りも困惑もない。\n「面白い考え方だね」という言葉が、僕の恋愛学理論のどこにも分類できなかった。",
    bg: "cafeteria",
    next: "c1_merge"
  },

  // C1_ROUTE_B
  "c1_route_b": {
    id: "c1_route_b",
    type: "narration",
    text: "三峰と二人で内藤に声をかけた。",
    bg: "classroom_morning",
    next: "c1_route_b_2"
  },
  "c1_route_b_2": {
    id: "c1_route_b_2",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "laugh",
    text: "内藤さん、よかったら一緒にお昼どう？ ちょっと仲良くなりたくて",
    bg: "classroom_morning",
    next: "c1_route_b_3"
  },
  "c1_route_b_3": {
    id: "c1_route_b_3",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "うん、いいよ",
    bg: "classroom_morning",
    next: "c1_route_b_4"
  },
  "c1_route_b_4": {
    id: "c1_route_b_4",
    type: "narration",
    text: "三峰が前に出た。僕は後ろについて行った。\n昼食中、三峰が内藤に話しかけ、僕は相槌を打つだけだったが、三人でいる時間は、不思議と楽しかった。\n\n【帰り道。三峰に言われた。】",
    bg: "hallway_south",
    next: "c1_route_b_5"
  },
  "c1_route_b_5": {
    id: "c1_route_b_5",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "sharp",
    text: "次は自分で話しかけな。あたしが先に出すぎたから、内藤さんは今あたしに話してる状態だよ",
    bg: "hallway_south",
    next: "c1_route_b_6"
  },
  "c1_route_b_6": {
    id: "c1_route_b_6",
    type: "narration",
    text: "……三峰は正確だ。そし三峰が内藤と話しているのを見ていたとき、僕は少しだけ、変な感覚を覚えた。\n羨ましい、と思った。三峰が内藤と自然に話せることを。",
    bg: "hallway_south",
    next: "c1_merge"
  },

  // C1_ROUTE_C
  "c1_route_c": {
    id: "c1_route_c",
    type: "narration",
    text: "誘うタイミングの計算をした。\n月曜の昼は疲れている。火曜は英語の後。水曜は図書室……計算を続けていると、三峰がしびれを切らした。",
    bg: "classroom_morning",
    next: "c1_route_c_2"
  },
  "c1_route_c_2": {
    id: "c1_route_c_2",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "sharp",
    text: "あんた、まだ計算してるの。一週間経ったよ",
    bg: "classroom_morning",
    next: "c1_route_c_3"
  },
  "c1_route_c_3": {
    id: "c1_route_c_3",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "serious",
    text: "もういい。あたしが話しかけてくる",
    bg: "classroom_morning",
    next: "c1_route_c_4"
  },
  "c1_route_c_4": {
    id: "c1_route_c_4",
    type: "dialogue",
    speaker: "櫻優",
    text: "待ってください！！",
    bg: "classroom_morning",
    next: "c1_route_c_5"
  },
  "c1_route_c_5": {
    id: "c1_route_c_5",
    type: "narration",
    text: "三峰に引っ張られて、内藤の前に立った。半ば強制的に。しかし、なんとかなった。",
    bg: "classroom_morning",
    next: "c1_route_c_6"
  },
  "c1_route_c_6": {
    id: "c1_route_c_6",
    type: "dialogue",
    speaker: "櫻優",
    text: "……よかったら、今日のお昼、一緒にどうですか",
    bg: "classroom_morning",
    next: "c1_route_c_7"
  },
  "c1_route_c_7": {
    id: "c1_route_c_7",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "いいよ。三峰さんも来る？",
    bg: "classroom_morning",
    next: "c1_route_c_8"
  },
  "c1_route_c_8": {
    id: "c1_route_c_8",
    type: "narration",
    text: "三峰も来た。計算外だったが悪くなかった。",
    bg: "classroom_morning",
    next: "c1_merge"
  },

  // C1_MERGE
  "c1_merge": {
    id: "c1_merge",
    type: "narration",
    text: "内藤蘭との昼食は、月に少しずつ増えた。\n最初は一回。次の月は二回。三峰がいるときも、内藤と二人のときもあった。彼女は僕の「恋愛学」を笑わなかった。\nただ「面白い考え方だね」と、穏やかな笑顔で言った。",
    bg: "cafeteria",
    next: "c1_merge_ran"
  },
  "c1_merge_ran": {
    id: "c1_merge_ran",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "恋愛学の一番重要な法則って何？",
    bg: "cafeteria",
    next: "c1_merge_2"
  },
  "c1_merge_2": {
    id: "c1_merge_2",
    type: "narration",
    text: "僕は答えに詰まった。法則は十五個ある。でも、今この瞬間に一番重要なものは——",
    bg: "cafeteria",
    next: "choice_c2"
  },
  "choice_c2": {
    id: "choice_c2",
    type: "choice",
    text: "一番重要な法則は何と答える？",
    bg: "cafeteria",
    choices: [
      {
        text: "A. 「第一法則：近接性と反復接触が好意を生む——今まさにそれが起きています」",
        next: "c2_route_a",
        flagChanges: { ran_koukan: 2 }
      },
      {
        text: "B. 「……わかりません。研究を続けても、わかりません」",
        next: "c2_route_b",
        flagChanges: { ran_koukan: 3, flag_ran_words: true }
      },
      {
        text: "C. 「シュレディンガーの好意——告白は波動関数の崩壊です」",
        next: "c2_route_c",
        flagChanges: { riron_izon: 2 }
      }
    ]
  },

  // C2_ROUTE_A
  "c2_route_a": {
    id: "c2_route_a",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "shy",
    text: "……今まさに、か",
    bg: "cafeteria",
    next: "c2_route_a_2"
  },
  "c2_route_a_2": {
    id: "c2_route_a_2",
    type: "narration",
    text: "彼女はしばらく黙っていた。それからまた「面白い考え方だね」と言った。今度の「面白い」は——少し違う音がした。",
    bg: "cafeteria",
    next: "c2_merge"
  },

  // C2_ROUTE_B
  "c2_route_b": {
    id: "c2_route_b",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "研究してる人が〈わかりません〉って言うの、正直で好き",
    bg: "cafeteria",
    next: "c2_route_b_2"
  },
  "c2_route_b_2": {
    id: "c2_route_b_2",
    type: "narration",
    text: "——好き、という言葉が、文脈とは無関係に刺さった。",
    bg: "cafeteria",
    next: "c2_route_b_3"
  },
  "c2_route_b_3": {
    id: "c2_route_b_3",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "normal",
    text: "わからないけど、続けてるんだね",
    bg: "cafeteria",
    next: "c2_route_b_4"
  },
  "c2_route_b_4": {
    id: "c2_route_b_4",
    type: "dialogue",
    speaker: "櫻優",
    text: "……続けています。なぜかは、自分でもわかりません",
    bg: "cafeteria",
    next: "c2_route_b_5"
  },
  "c2_route_b_5": {
    id: "c2_route_b_5",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "それが一番重要な法則なのかもしれないね。わからないけど続けること",
    bg: "cafeteria",
    next: "c2_route_b_6"
  },
  "c2_route_b_6": {
    id: "c2_route_b_6",
    type: "narration",
    text: "彼女が言ったことが、僕の研究ノートのどのページにも書いていないことだった。\n『恋愛発生の第十五法則（暫定）：〈わからないけど続けること〉が最も重要かもしれない』\nそれは理論じゃなかった。でも書かずにはいられなかった。",
    bg: "cafeteria",
    next: "c2_merge"
  },

  // C2_ROUTE_C
  "c2_route_c": {
    id: "c2_route_c",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "normal",
    text: "波動関数って、量子力学の？",
    bg: "cafeteria",
    next: "c2_route_c_2"
  },
  "c2_route_c_2": {
    id: "c2_route_c_2",
    type: "dialogue",
    speaker: "櫻優",
    text: "はい。告白は量子力学的に見ると——",
    bg: "cafeteria",
    next: "c2_route_c_3"
  },
  "c2_route_c_3": {
    id: "c2_route_c_3",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "laugh",
    text: "……難しいね。でも、面白い考え方だね",
    bg: "cafeteria",
    next: "c2_route_c_4"
  },
  "c2_route_c_4": {
    id: "c2_route_c_4",
    type: "narration",
    text: "「面白い考え方」が出た。\nしかし、今回の「面白い」には、戸惑いが混じっていた。理論は時に、人と人の間に壁を作る。",
    bg: "cafeteria",
    next: "c2_merge"
  },

  // C2_MERGE
  "c2_merge": {
    id: "c2_merge",
    type: "narration",
    text: "内藤蘭は——難しかった。\n好意を向けているのか、友好的に接しているだけなのか。「面白い」が何を意味するのか。僕の理論では、分類できない。\n\n夜。研究ノートを開いた。 「現在の好意観測状況：未確定（重ね合わせ状態継続）」シュレディンガーの好意は、まだ収束していない。",
    bg: "classroom_afternoon",
    next: "ch4_001"
  },

  // ===== 第四章: 合同課題——理論と地面のあいだ =====
  "ch4_001": {
    id: "ch4_001",
    type: "narration",
    text: "【第四章】\n「合同課題——理論と地面のあいだ」\n時期：高校二年・七月",
    bg: "classroom_morning",
    bgm: "classroom",
    next: "ch4_002"
  },
  "ch4_002": {
    id: "ch4_002",
    type: "narration",
    text: "七月。異棟合同課題が発表された。内進と理数科の混合チームで、テーマについてプレゼンを行う。\n僕のチーム：僕、三峰、内進三人（うち一人が内藤）。\nテーマ：「自然災害と地形の関係——防災マップの再設計」",
    bg: "classroom_morning",
    next: "ch4_003"
  },
  "ch4_003": {
    id: "ch4_003",
    type: "narration",
    text: "同じチームに、内藤蘭がいる。理論が暴走する予感がした。\n\n【放課後の教室で最初のミーティング】",
    bg: "classroom_afternoon",
    next: "ch4_meeting"
  },
  "ch4_meeting": {
    id: "ch4_meeting",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "normal",
    text: "防災マップって、どんな方向性でまとめましょう？",
    bg: "classroom_afternoon",
    next: "ch4_meeting_mimine"
  },
  "ch4_meeting_mimine": {
    id: "ch4_meeting_mimine",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "normal",
    text: "わかりやすいビジュアルで見やすくしよう。審査員は外部の人もいるから",
    bg: "classroom_afternoon",
    next: "ch4_004"
  },
  "ch4_004": {
    id: "ch4_004",
    type: "narration",
    text: "方向性を話し合う中、僕は理数科の両馬先輩が言っていた「地面の言葉、過去の等高線」を思い出していた。",
    bg: "classroom_afternoon",
    next: "choice_d1"
  },
  "choice_d1": {
    id: "choice_d1",
    type: "choice",
    text: "どのような提案をする？",
    bg: "classroom_afternoon",
    choices: [
      {
        text: "A. 両馬先輩のアイデアを紹介（「地面の歴史から読む防災マップ」）",
        next: "d1_route_a",
        flagChanges: { honsitsu_index: 1, ran_koukan: 1 }
      },
      {
        text: "B. 自分の恋愛学の理論を応用してみる",
        next: "d1_route_b",
        flagChanges: { riron_izon: 2 }
      },
      {
        text: "C. 三峰の意見に乗る（ビジュアル優先）",
        next: "d1_route_c",
        flagChanges: { mimine_flag: 1 }
      }
    ]
  },

  // D1_ROUTE_A
  "d1_route_a": {
    id: "d1_route_a",
    type: "dialogue",
    speaker: "櫻優",
    text: "あの……知り合いの理数科の方から聞いたアイデアなんですが。地面の歴史から読む防災マップ——等高線一本一本に、過去の人間の判断が載っている、という考え方です。なぜそこが危ないのかを、地面の記憶から語る",
    bg: "classroom_afternoon",
    next: "d1_route_a_2"
  },
  "d1_route_a_2": {
    id: "d1_route_a_2",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "面白い。〈なぜ危ないのか〉が地面の言葉で語られる——それって、防災の意味が変わる気がする",
    bg: "classroom_afternoon",
    next: "d1_route_a_3"
  },
  "d1_route_a_3": {
    id: "d1_route_a_3",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "normal",
    text: "……普通の防災マップより深みが出そう。やってみよう",
    bg: "classroom_afternoon",
    next: "d1_route_a_4"
  },
  "d1_route_a_4": {
    id: "d1_route_a_4",
    type: "narration",
    text: "内藤が「面白い」と言った。それを僕が持ち込んだアイデアに言った。少しだけ、誇らしかった。",
    bg: "classroom_afternoon",
    next: "d1_merge"
  },

  // D1_ROUTE_B
  "d1_route_b": {
    id: "d1_route_b",
    type: "dialogue",
    speaker: "櫻優",
    text: "恋愛学的観点から——人間の行動パターンを分析すると、避難時の意思決定には感情的バイアスが介入します。つまり防災マップは、感情的結合の動線も考慮すべきで——",
    bg: "classroom_afternoon",
    next: "d1_route_b_2"
  },
  "d1_route_b_2": {
    id: "d1_route_b_2",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "sharp",
    text: "防災マップに恋愛学は関係ないでしょ",
    bg: "classroom_afternoon",
    next: "d1_route_b_3"
  },
  "d1_route_b_3": {
    id: "d1_route_b_3",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "laugh",
    text: "……面白い考え方だね",
    bg: "classroom_afternoon",
    next: "d1_route_b_4"
  },
  "d1_route_b_4": {
    id: "d1_route_b_4",
    type: "narration",
    text: "内藤がまた「面白い」と言った。でも今回の「面白い」には、どこか困惑が混じっている気がした。理論が——また壁を作った。",
    bg: "classroom_afternoon",
    next: "d1_merge"
  },

  // D1_ROUTE_C
  "d1_route_c": {
    id: "d1_route_c",
    type: "narration",
    text: "三峰の方針に乗った。ビジュアル重視。わかりやすく。\n作業をしながら、三峰が手際よくチームを仕切っている。内藤は資料を読んで、大事そうなところに付箋を貼っている。僕は——ただ見ていた。\n\n【作業の合間に三峰が近くに来る】",
    bg: "classroom_afternoon",
    next: "d1_route_c_2"
  },
  "d1_route_c_2": {
    id: "d1_route_c_2",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "sharp",
    text: "ねえ。内藤さんと話してる？ それとも見てるだけ？",
    bg: "classroom_afternoon",
    next: "d1_route_c_3"
  },
  "d1_route_c_3": {
    id: "d1_route_c_3",
    type: "dialogue",
    speaker: "櫻優",
    text: "……一緒に作業しています",
    bg: "classroom_afternoon",
    next: "d1_route_c_4"
  },
  "d1_route_c_4": {
    id: "d1_route_c_4",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "sharp",
    text: "作業は一緒にしてる。でも話しかけてないじゃん。ずっと内藤さんのこと見てるだけ",
    bg: "classroom_afternoon",
    next: "d1_route_c_5"
  },
  "d1_route_c_5": {
    id: "d1_route_c_5",
    type: "narration",
    text: "……見ていた。三峰に言われるまで気づかなかった。",
    bg: "classroom_afternoon",
    next: "d1_merge"
  },

  // D1_MERGE
  "d1_merge": {
    id: "d1_merge",
    type: "narration",
    text: "【合同課題の作業中、部屋に二人きりになる瞬間が訪れた】",
    bg: "classroom_afternoon",
    se: "page_turn",
    next: "d1_merge_ran"
  },
  "d1_merge_ran": {
    id: "d1_merge_ran",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "normal",
    text: "さっき……寺地星くんの配信、最近見てる、って言いかけましたよね",
    bg: "classroom_afternoon",
    next: "d1_merge_3"
  },
  "d1_merge_3": {
    id: "d1_merge_3",
    type: "dialogue",
    speaker: "櫻優",
    text: "見てます。本質配信",
    bg: "classroom_afternoon",
    next: "d1_merge_ran2"
  },
  "d1_merge_ran2": {
    id: "d1_merge_ran2",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "あたしも見てる。意味わかんないけど、なんか安心するんだよね",
    bg: "classroom_afternoon",
    next: "choice_d2"
  },
  "choice_d2": {
    id: "choice_d2",
    type: "choice",
    text: "内藤にどう答える？",
    bg: "classroom_afternoon",
    choices: [
      {
        text: "A. 「実は寺地先輩と知り合いです」（理数科で…）",
        next: "d2_route_a",
        flagChanges: { ran_koukan: 2, honsitsu_index: 1 }
      },
      {
        text: "B. 「〈意味わかんないけど安心する〉わかります」",
        next: "d2_route_b",
        flagChanges: { ran_koukan: 2 }
      },
      {
        text: "C. 「なぜ安心するんでしょう。理論的には——」",
        next: "d2_route_c",
        flagChanges: { riron_izon: 1 }
      }
    ]
  },

  // D2_ROUTE_A
  "d2_route_a": {
    id: "d2_route_a",
    type: "dialogue",
    speaker: "櫻優",
    text: "実は……寺地先輩と知り合いです。理数科に研究で通っていたので",
    bg: "classroom_afternoon",
    next: "d2_route_a_2"
  },
  "d2_route_a_2": {
    id: "d2_route_a_2",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "surprised",
    text: "えっ！？ じゃあ両馬先輩とも？",
    bg: "classroom_afternoon",
    next: "d2_route_a_3"
  },
  "d2_route_a_3": {
    id: "d2_route_a_3",
    type: "dialogue",
    speaker: "櫻優",
    text: "はい。✝本質✝の……発信者の方とも",
    bg: "classroom_afternoon",
    next: "d2_route_a_4"
  },
  "d2_route_a_4": {
    id: "d2_route_a_4",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "✝本質✝ってあの掲示板のやつ！？ 受験のとき読んでたんだよね——〈偏差値は等高線の一本に過ぎない〉とか、全然意味わかんないんだけど、桐葉高校に来たくなって",
    bg: "classroom_afternoon",
    next: "d2_route_a_5"
  },
  "d2_route_a_5": {
    id: "d2_route_a_5",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "shy",
    text: "……変だよね。意味わかんないものに引き寄せられるなんて",
    bg: "classroom_afternoon",
    next: "d2_route_a_6"
  },
  "d2_route_a_6": {
    id: "d2_route_a_6",
    type: "dialogue",
    speaker: "櫻優",
    text: "変じゃないです。理数科の先輩が言っていました——〈不理解の引力〉。理解できないものに惹かれる力のことだそうです",
    bg: "classroom_afternoon",
    next: "d2_route_a_7"
  },
  "d2_route_a_7": {
    id: "d2_route_a_7",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "不理解の引力、か。それ、恋愛にも使えそう",
    bg: "classroom_afternoon",
    next: "d2_route_a_8"
  },
  "d2_route_a_8": {
    id: "d2_route_a_8",
    type: "narration",
    text: "内藤蘭が『恋愛』という言葉を使った。文脈は関係ない。心臓が止まりそうだった。",
    bg: "classroom_afternoon",
    next: "d2_merge"
  },

  // D2_ROUTE_B
  "d2_route_b": {
    id: "d2_route_b",
    type: "dialogue",
    speaker: "櫻優",
    text: "わかります。意味がわかんないのに聞いてると、言葉で処理してない状態になる。黙っているのに近い。そこに安心がある気がします",
    bg: "classroom_afternoon",
    next: "d2_route_b_2"
  },
  "d2_route_b_2": {
    id: "d2_route_b_2",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "……それ、すごくしっくりくる。黙ってるのに近い、か",
    bg: "classroom_afternoon",
    next: "d2_route_b_3"
  },
  "d2_route_b_3": {
    id: "d2_route_b_3",
    type: "narration",
    text: "内藤が少し前に体を傾けた。距離が縮んだ気がした。",
    bg: "classroom_afternoon",
    next: "d2_merge"
  },

  // D2_ROUTE_C
  "d2_route_c": {
    id: "d2_route_c",
    type: "dialogue",
    speaker: "櫻優",
    text: "なぜ安心するのかを分析すると——意味がない情報を受け取ると脳が理解しようとするのをやめて、デフォルトモードネットワークが活性化し——",
    bg: "classroom_afternoon",
    next: "d2_route_c_2"
  },
  "d2_route_c_2": {
    id: "d2_route_c_2",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "normal",
    text: "……な、なるほど",
    bg: "classroom_afternoon",
    next: "d2_route_c_3"
  },
  "d2_route_c_3": {
    id: "d2_route_c_3",
    type: "narration",
    text: "「なるほど」と「面白い」の差がある。なるほどは、届いていない。",
    bg: "classroom_afternoon",
    next: "d2_merge"
  },

  // D2_MERGE
  "d2_merge": {
    id: "d2_merge",
    type: "narration",
    text: "【合同課題・発表後。廊下。】\n発表が終わり、僕たちのチームは3位だった。\n廊下に出ると、内藤が待っていた。",
    bg: "hallway_south",
    next: "d2_merge_ran"
  },
  "d2_merge_ran": {
    id: "d2_merge_ran",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "お疲れ様。発表、すごくよかったと思う",
    bg: "hallway_south",
    next: "d2_merge_3"
  },
  "d2_merge_3": {
    id: "d2_merge_3",
    type: "dialogue",
    speaker: "櫻優",
    text: "ありがとうございます。内藤さんの資料整理が丁寧で——",
    bg: "hallway_south",
    next: "d2_merge_ran2"
  },
  "d2_merge_ran2": {
    id: "d2_merge_ran2",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "serious",
    text: "ねえ、一個聞いていい？ 恋愛学って、当事者になった研究者は、どうやって研究を続けるの？",
    bg: "hallway_south",
    next: "d2_merge_heart"
  },
  "d2_merge_heart": {
    id: "d2_merge_heart",
    type: "narration",
    text: "【鼓動の音】彼女の静かな問いに、どう答えるべきか。",
    bg: "hallway_south",
    se: "heartbeat",
    next: "choice_d3"
  },
  "choice_d3": {
    id: "choice_d3",
    type: "choice",
    text: "当事者になった研究者の継続方法をどう答える？",
    bg: "hallway_south",
    choices: [
      {
        text: "A. 「続けられないんです。それが問題で」",
        next: "d3_route_a",
        flagChanges: { ran_koukan: 3, riron_izon: -1 }
      },
      {
        text: "B. 「理論と感情を分離すれば続けられます」",
        next: "d3_route_b",
        flagChanges: { riron_izon: 2 }
      },
      {
        text: "C. 「……内藤さんが被験者なので、聞きにくいことがあります」",
        next: "d3_route_c",
        flagChanges: { ran_koukan: 4, flag_specimen: true }
      }
    ]
  },

  // D3_ROUTE_A
  "d3_route_a": {
    id: "d3_route_a",
    type: "dialogue",
    speaker: "櫻優",
    text: "続けられないんです。それが一番の問題です。当事者になると、客観性がなくなる",
    bg: "hallway_south",
    next: "d3_route_a_2"
  },
  "d3_route_a_2": {
    id: "d3_route_a_2",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "それって、理論より本物の方が大事ってことじゃない？",
    bg: "hallway_south",
    next: "d3_route_a_3"
  },
  "d3_route_a_3": {
    id: "d3_route_a_3",
    type: "narration",
    text: "正しいことより、本当のことの方が大事だ。本質配信で聞いた言葉が重なった。",
    bg: "hallway_south",
    next: "d3_merge"
  },

  // D3_ROUTE_B
  "d3_route_b": {
    id: "d3_route_b",
    type: "dialogue",
    speaker: "櫻優",
    text: "理論と感情を分離すれば続けられます。観察対象と被験者を明確に——",
    bg: "hallway_south",
    next: "d3_route_b_2"
  },
  "d3_route_b_2": {
    id: "d3_route_b_2",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "それって……つらくない？",
    bg: "hallway_south",
    next: "d3_route_b_3"
  },
  "d3_route_b_3": {
    id: "d3_route_b_3",
    type: "narration",
    text: "つらい。つらいとは言えなかった。",
    bg: "hallway_south",
    next: "d3_merge"
  },

  // D3_ROUTE_C
  "d3_route_c": {
    id: "d3_route_c",
    type: "dialogue",
    speaker: "櫻優",
    text: "……内藤さんが——その、被験者なので。聞きにくいことが、あります",
    bg: "hallway_south",
    next: "d3_route_c_2"
  },
  "d3_route_c_2": {
    id: "d3_route_c_2",
    type: "narration",
    text: "【沈黙】言ってしまった。言うつもりはなかった。内藤の表情が読めない。",
    bg: "hallway_south",
    next: "d3_route_c_ran"
  },
  "d3_route_c_ran": {
    id: "d3_route_c_ran",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "shy",
    text: "……被験者、か",
    bg: "hallway_south",
    next: "d3_route_c_4"
  },
  "d3_route_c_4": {
    id: "d3_route_c_4",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "被験者、嫌いじゃないけど",
    bg: "hallway_south",
    next: "d3_route_c_5"
  },
  "d3_route_c_5": {
    id: "d3_route_c_5",
    type: "narration",
    text: "嫌いじゃない。\nその意味を理論に落とし込む前に、彼女はもう歩き始めていた。「また昼食、一緒に食べよう」と言いながら。",
    bg: "hallway_south",
    next: "d3_merge"
  },

  // D3_MERGE
  "d3_merge": {
    id: "d3_merge",
    type: "narration",
    text: "その夜、三峰にLINEを送った。\n\n『櫻：内藤さんに、被験者と言ってしまいました』\n『三峰：は？ 最悪じゃん。でもどんな反応だった？』\n『櫻：〈嫌いじゃないけど〉と言っていました』\n『三峰：…………なんか進んでるじゃん！！！！』",
    bg: "classroom_afternoon",
    next: "d3_merge_2"
  },
  "d3_merge_2": {
    id: "d3_merge_2",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "laugh",
    text: "あんたって要領が悪いのに核心だけ当たるんだよ。天然タイプ",
    bg: "classroom_afternoon",
    next: "d3_merge_3"
  },
  "d3_merge_3": {
    id: "d3_merge_3",
    type: "narration",
    text: "研究ノートに記録した。\n「恋愛学・研究者による自己分析：天然タイプと診断された」",
    bg: "classroom_afternoon",
    next: "ch5_001"
  },

  // ===== 第五章: 本質配信と、内藤さんと、三峰の話 =====
  "ch5_001": {
    id: "ch5_001",
    type: "narration",
    text: "【第五章】\n「本質配信と、内藤さんと、三峰の話」\n時期：高校二年・八月〜十一月",
    bg: "classroom_morning",
    bgm: "honsitsu",
    next: "ch5_002"
  },
  "ch5_002": {
    id: "ch5_002",
    type: "narration",
    text: "夏が来た。\n本質配信の登録者が千人を超えた。内藤蘭もその一人だ。\n\nしかし、夏の終わり。寺地先輩の配信が一時停止した。心配が、心に広がった。",
    bg: "classroom_morning",
    next: "choice_e1"
  },
  "choice_e1": {
    id: "choice_e1",
    type: "choice",
    text: "配信が停止した件、どうする？",
    bg: "classroom_morning",
    choices: [
      {
        text: "A. 内藤に配信の件を話す",
        next: "e1_route_a",
        flagChanges: { ran_koukan: 1, honsitsu_index: 1 }
      },
      {
        text: "B. 話さず様子を見る",
        next: "e1_route_b",
        flagChanges: { mimine_flag: 1 }
      },
      {
        text: "C. 三峰に相談する",
        next: "e1_route_c",
        flagChanges: { mimine_flag: 2 }
      }
    ]
  },

  // E1_ROUTE_A
  "e1_route_a": {
    id: "e1_route_a",
    type: "narration",
    text: "【昼食中。】",
    bg: "cafeteria",
    next: "e1_route_a_2"
  },
  "e1_route_a_2": {
    id: "e1_route_a_2",
    type: "dialogue",
    speaker: "櫻優",
    text: "内藤さん。本質配信のこと、ご存知ですか",
    bg: "cafeteria",
    next: "e1_route_a_ran"
  },
  "e1_route_a_ran": {
    id: "e1_route_a_ran",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "serious",
    text: "知ってる。最近配信止まってるよね。心配してた",
    bg: "cafeteria",
    next: "e1_route_a_3"
  },
  "e1_route_a_3": {
    id: "e1_route_a_3",
    type: "dialogue",
    speaker: "櫻優",
    text: "炎上があって……寺地先輩が一度配信をやめました。でも——また再開するそうです。非公開で、少人数に向けて",
    bg: "cafeteria",
    next: "e1_route_a_ran2"
  },
  "e1_route_a_ran2": {
    id: "e1_route_a_ran2",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "そっか。よかった。……寺地くんって、あたしのこと知らないのに、配信で読んでくれた言葉が、すごく刺さったことがあって",
    bg: "cafeteria",
    next: "e1_route_a_4"
  },
  "e1_route_a_4": {
    id: "e1_route_a_4",
    type: "dialogue",
    speaker: "櫻優",
    text: "何を読んでくれたんですか？",
    bg: "cafeteria",
    next: "e1_route_a_ran3"
  },
  "e1_route_a_ran3": {
    id: "e1_route_a_ran3",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "shy",
    text: "〈恋愛は、うまくいっていないときの方が本質に近い〉って。……あたし、前に好きな人がいて、うまくいかなかった時期があって。そのとき聞いて、なんか救われた気がした",
    bg: "cafeteria",
    next: "e1_route_a_5"
  },
  "e1_route_a_5": {
    id: "e1_route_a_5",
    type: "narration",
    text: "内藤蘭に、かつて好きな人がいた。\nこの情報をどう処理すべきか。研究ノートには書けなかった。",
    bg: "cafeteria",
    next: "e1_merge"
  },

  // E1_ROUTE_B
  "e1_route_b": {
    id: "e1_route_b",
    type: "narration",
    text: "話さなかった。内藤が自分で気づくかもしれない。\n気づいたとき、何かを言えばいい……理論的にはそれが正しい。しかし先に言えばよかったと思う瞬間は、後で来た。",
    bg: "classroom_morning",
    next: "e1_merge"
  },

  // E1_ROUTE_C
  "e1_route_c": {
    id: "e1_route_c",
    type: "narration",
    text: "【放課後。三峰と二人で話す。】",
    bg: "classroom_afternoon",
    next: "e1_route_c_2"
  },
  "e1_route_c_2": {
    id: "e1_route_c_2",
    type: "dialogue",
    speaker: "櫻優",
    text: "内藤さんに配信の話をするか迷っています。炎上のことは、寺地先輩にとって——",
    bg: "classroom_afternoon",
    next: "e1_route_c_mimine"
  },
  "e1_route_c_mimine": {
    id: "e1_route_c_mimine",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "serious",
    text: "内藤さんは配信のファンでしょ。停止してること知ってたら心配してるよ。話して悪いことなんてない",
    bg: "classroom_afternoon",
    next: "e1_route_c_3"
  },
  "e1_route_c_3": {
    id: "e1_route_c_3",
    type: "narration",
    text: "三峰は決断が速い。理論がなくても、正しい答えを出す。こういう人間が僕の理論の外にいる。",
    bg: "classroom_afternoon",
    next: "e1_route_c_mimine2"
  },
  "e1_route_c_mimine2": {
    id: "e1_route_c_mimine2",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "laugh",
    text: "てか、あんた最近、内藤さんより私とLINEしてる時間の方が長くない？",
    bg: "classroom_afternoon",
    next: "e1_route_c_4"
  },
  "e1_route_c_4": {
    id: "e1_route_c_4",
    type: "narration",
    text: "その言葉が、なぜか胸に引っかかった。特別フラグ「三峰の問い」が灯る。",
    bg: "classroom_afternoon",
    next: "e1_merge"
  },

  // E1_MERGE
  "e1_merge": {
    id: "e1_merge",
    type: "narration",
    text: "【秋。文化祭の準備が始まる頃】\n内藤との昼食は月に四回になっていた。三峰も一緒のことが多かった。\n三人で話しているとき、一番笑っているのが——気づくと、内藤ではなく三峰だったりした。",
    bg: "classroom_afternoon",
    next: "e1_merge_2"
  },
  "e1_merge_2": {
    id: "e1_merge_2",
    type: "narration",
    text: "研究ノートを開く。\n「好意の対象：内藤蘭（n=1, 消しゴム事象から継続）」\nその下に、いつの間にかペンが走っていた。\n「三峰瑠衣：観察データ累積」と書かれている。いつ書いたか覚えていない。",
    bg: "classroom_afternoon",
    next: "choice_e2"
  },
  "choice_e2": {
    id: "choice_e2",
    type: "choice",
    text: "ノートに書かれた『三峰瑠衣』のデータをどうする？",
    bg: "classroom_afternoon",
    choices: [
      {
        text: "A. ノートの「三峰瑠衣」を消す（内藤ルート）",
        next: "e2_route_a",
        flagChanges: {}
      },
      {
        text: "B. しばらくそのままにする",
        next: "e2_route_b",
        flagChanges: { mimine_flag: 3 }
      },
      {
        text: "C. 三峰に「一緒にいると楽しい」と伝える",
        next: "e2_route_c",
        flagChanges: { mimine_flag: 5 }
      }
    ]
  },

  // E2_ROUTE_A
  "e2_route_a": {
    id: "e2_route_a",
    type: "narration",
    text: "消した。消したとき、何かを決めた気がした。\n内藤蘭のことが好きだ。それは最初から変わらない。",
    bg: "classroom_afternoon",
    next: "goto_ran_route"
  },

  // E2_ROUTE_B
  "e2_route_b": {
    id: "e2_route_b",
    type: "narration",
    text: "消さなかった。なぜか消せなかった。\n理論的には意味のないデータだ。しかし、「意味のないデータが✝本質✝だ」と両馬先輩は言っていた。",
    bg: "classroom_afternoon",
    next: "goto_split_route"
  },

  // E2_ROUTE_C
  "e2_route_c": {
    id: "e2_route_c",
    type: "narration",
    text: "【放課後。三峰と二人きりの教室。】",
    bg: "classroom_afternoon",
    next: "e2_route_c_2"
  },
  "e2_route_c_2": {
    id: "e2_route_c_2",
    type: "dialogue",
    speaker: "櫻優",
    text: "三峰さん。一緒にいると——楽しいです",
    bg: "classroom_afternoon",
    next: "e2_route_c_mimine"
  },
  "e2_route_c_mimine": {
    id: "e2_route_c_mimine",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "sharp",
    text: "……なんで急に",
    bg: "classroom_afternoon",
    next: "e2_route_c_3"
  },
  "e2_route_c_3": {
    id: "e2_route_c_3",
    type: "dialogue",
    speaker: "櫻優",
    text: "気づいたら、毎日話したくなっていて。内藤さんのことを考えるより、三峰さんに話しかけに行く方が——",
    bg: "classroom_afternoon",
    next: "e2_route_c_mimine2"
  },
  "e2_route_c_mimine2": {
    id: "e2_route_c_mimine2",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "blush",
    text: "……それって。どういう意味？",
    bg: "classroom_afternoon",
    se: "heartbeat",
    next: "goto_mimine_route"
  },

  // ROUTE SPLITTERS FOR NEXT SCECTIONS
  "goto_ran_route": {
    id: "goto_ran_route",
    type: "narration",
    text: "内藤さんへの気持ちへ、僕のすべての波動関数が収束しようとしていた。",
    bg: "classroom_afternoon",
    next: "ch6_ran_001"
  },
  "goto_split_route": {
    id: "goto_split_route",
    type: "narration",
    text: "重ね合わさった好意。蘭への気持ちと、瑠衣への心地よさ。どちらに収束するのだろう？",
    bg: "classroom_afternoon",
    next: "split_judgment"
  },
  "goto_mimine_route": {
    id: "goto_mimine_route",
    type: "narration",
    text: "僕の気持ちは、間違いなく目の前の『三峰瑠衣』に向かって収束していた。観測された、新しい好意。",
    bg: "classroom_afternoon",
    next: "ch6_mimine_001"
  },

  "split_judgment": {
    id: "split_judgment",
    type: "narration",
    text: "（システム判定中：三峰強フラグの場合は三峰ルートへ、それ以外は内藤ルートへ進行します）",
    bg: "classroom_afternoon",
    next: "perform_split"
  }
};
