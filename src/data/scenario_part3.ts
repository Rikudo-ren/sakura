import { Scene } from '../types';

export const scenarioPart3: Record<string, Scene> = {
  // ===== 第六章: 冬が来る前に——そして、告白の条件（内藤ルート） =====
  "ch6_ran_001": {
    id: "ch6_ran_001",
    type: "narration",
    text: "【第六章：内藤ルート】\n「冬が来る前に——そして、告白の条件」\n時期：高校二年・十二月〜三年・四月",
    bg: "classroom_morning",
    bgm: "classroom",
    next: "ch6_ran_002"
  },
  "ch6_ran_002": {
    id: "ch6_ran_002",
    type: "narration",
    text: "二年の冬が来た。内藤との昼食は定着した。\n本質配信の非公開URLを内藤に送った——寺地先輩に許可を取った上で。\n『内藤LINE：ありがとう。また聞けるの嬉しい。✝』\n感染した、と三峰は言った。僕の研究ノートにも最近✝がついている。",
    bg: "classroom_afternoon",
    next: "ch6_ran_003"
  },
  "ch6_ran_003": {
    id: "ch6_ran_003",
    type: "narration",
    text: "【三年生になった。】\nクラス替えはなく、内進と理数科は別のまま。しかし内藤蘭との昼食は続いている。\n受験の年になり、時間は確実に少なくなっていった。",
    bg: "classroom_morning",
    next: "ch6_ran_004"
  },
  "ch6_ran_004": {
    id: "ch6_ran_004",
    type: "narration",
    text: "五月。マラソン大会の後。\n内藤が珍しく、疲れた顔をしていた。",
    bg: "hallway_south",
    next: "ch6_ran_ran"
  },
  "ch6_ran_ran": {
    id: "ch6_ran_ran",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "serious",
    text: "受験、焦ってきた。志望校がずっと決められなくて",
    bg: "hallway_south",
    next: "ch6_ran_5"
  },
  "ch6_ran_5": {
    id: "ch6_ran_5",
    type: "dialogue",
    speaker: "櫻優",
    text: "……何が決められないんですか？",
    bg: "hallway_south",
    next: "ch6_ran_ran2"
  },
  "ch6_ran_ran2": {
    id: "ch6_ran_ran2",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "serious",
    text: "やりたいことがあるんだけど、理論的に無理かもって思って。でもやりたいことを諦めると、何で生きてるかわかんないな、とも思って",
    bg: "hallway_south",
    next: "ch6_ran_6"
  },
  "ch6_ran_6": {
    id: "ch6_ran_6",
    type: "narration",
    text: "やりたいことと理論の間で迷っている。僕と同じ構造だ。\n最後の、最も重い波動関数の前で、僕は——",
    bg: "hallway_south",
    next: "choice_f1"
  },
  "choice_f1": {
    id: "choice_f1",
    type: "choice",
    text: "内藤に何と言葉をかける？ (最終選択肢)",
    bg: "hallway_south",
    choices: [
      {
        text: "A. 「やりたいことをやってください。理論は後からついてきます」",
        next: "f1_route_a"
      },
      {
        text: "B. 「志望校の条件を一緒に整理しましょう。データ的に——」",
        next: "f1_route_b"
      },
      {
        text: "C. 「……あなたのやりたいことを、教えてもらえますか」",
        next: "f1_route_c"
      },
      {
        text: "D. 「——内藤さん、好きです」（唐突に告白する）",
        next: "f1_route_d"
      },
      {
        text: "E. 何も言えない（沈黙する）",
        next: "f1_route_e"
      }
    ]
  },

  // F1_ROUTE_A -> END 1
  "f1_route_a": {
    id: "f1_route_a",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "surprised",
    text: "……理論は後からついてくる、か",
    bg: "hallway_south",
    next: "f1_route_a_2"
  },
  "f1_route_a_2": {
    id: "f1_route_a_2",
    type: "dialogue",
    speaker: "櫻優",
    text: "少なくとも——僕の研究ノートには、理論を先に作って行動したことより、行動してから理論を書いたことの方が、正確なデータが得られています",
    bg: "hallway_south",
    next: "f1_route_a_3"
  },
  "f1_route_a_3": {
    id: "f1_route_a_3",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "恋愛学の話？",
    bg: "hallway_south",
    next: "f1_route_a_4"
  },
  "f1_route_a_4": {
    id: "f1_route_a_4",
    type: "narration",
    text: "ここだ、と思った。両馬先輩が言っていた言葉が浮かんだ。\n『普通に頑張ることが✝本質✝なんだよ』\n普通に言え。理論を外して。",
    bg: "hallway_south",
    next: "f1_route_a_5"
  },
  "f1_route_a_5": {
    id: "f1_route_a_5",
    type: "dialogue",
    speaker: "櫻優",
    text: "——内藤さん",
    bg: "hallway_south",
    next: "f1_route_a_ran"
  },
  "f1_route_a_ran": {
    id: "f1_route_a_ran",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "normal",
    text: "うん？",
    bg: "hallway_south",
    next: "f1_route_a_6"
  },
  "f1_route_a_6": {
    id: "f1_route_a_6",
    type: "dialogue",
    speaker: "櫻優",
    text: "好きです",
    bg: "hallway_south",
    next: "f1_route_a_silence"
  },
  "f1_route_a_silence": {
    id: "f1_route_a_silence",
    type: "narration",
    text: "【長い沈黙】",
    bg: "hallway_south",
    se: "heartbeat",
    next: "f1_route_a_ran2"
  },
  "f1_route_a_ran2": {
    id: "f1_route_a_ran2",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "shy",
    text: "……波動関数、崩壊した",
    bg: "hallway_south",
    next: "f1_route_a_7"
  },
  "f1_route_a_7": {
    id: "f1_route_a_7",
    type: "dialogue",
    speaker: "櫻優",
    text: "——はい",
    bg: "hallway_south",
    next: "f1_route_a_ran3"
  },
  "f1_route_a_ran3": {
    id: "f1_route_a_ran3",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "special",
    text: "あたしも、崩壊してたかも。だいぶ前から",
    bg: "hallway_south",
    next: "end1_start"
  },

  // ===== END 1: ✝本質✝は定義できない、でも愛は言える =====
  "end1_start": {
    id: "end1_start",
    type: "narration",
    text: "その日の帰り道。\n南棟と北棟の間の桜並木を、内藤と並んで歩いた。桜はまだ咲いていなかったが、咲く前の枝が午後の光の中で確かに輝いていた。",
    bg: "cherry_blossom_path",
    bgm: "end1",
    next: "end1_ran"
  },
  "end1_ran": {
    id: "end1_ran",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "special",
    text: "恋愛学の第十六法則、書いてよ",
    bg: "cherry_blossom_path",
    next: "end1_2"
  },
  "end1_2": {
    id: "end1_2",
    type: "dialogue",
    speaker: "櫻優",
    text: "なんて書けばいいですか",
    bg: "cherry_blossom_path",
    next: "end1_ran2"
  },
  "end1_ran2": {
    id: "end1_ran2",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "〈理論より先に、言葉にすること〉",
    bg: "cherry_blossom_path",
    next: "end1_3"
  },
  "end1_3": {
    id: "end1_3",
    type: "narration",
    text: "研究ノートを開いた。\n「恋愛発生の第十六法則：理論より先に、言葉にすること」\n下に、一言だけ加えた。\n「✝本質✝は定義できない。でも愛は言える」",
    bg: "cherry_blossom_path",
    next: "end1_screen"
  },
  "end1_screen": {
    id: "end1_screen",
    type: "end",
    endId: "END1",
    bg: "cherry_blossom_path",
    title: "END 1",
    subtitle: "「✝本質✝は定義できない、でも愛は言える」",
    text: "この先、二人は一緒に桜の下を歩き続けた。\n研究ノートは書き続けられた。でも、最後のページは——\nいつまでも空白のまま。\nそれが一番の✝本質✝だったから。"
  },

  // F1_ROUTE_B -> END 2
  "f1_route_b": {
    id: "f1_route_b",
    type: "dialogue",
    speaker: "櫻優",
    text: "志望校の条件を一緒に整理しましょう。やりたいことを軸にしたとき、可能な進路を——",
    bg: "hallway_south",
    next: "f1_route_b_ran"
  },
  "f1_route_b_ran": {
    id: "f1_route_b_ran",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "ありがとう。……櫻くんは、本当に真面目だね",
    bg: "hallway_south",
    next: "f1_route_b_2"
  },
  "f1_route_b_2": {
    id: "f1_route_b_2",
    type: "narration",
    text: "真面目。その言葉の中に、どういう感情があったのか、研究者として分析しようとしてできなかった。好きな人の言葉は、分析できない。\n\n夏が来、秋になり、内藤は違う遠い場所の大学を選んだ。",
    bg: "classroom_afternoon",
    bgm: "end2",
    next: "f1_route_b_3"
  },
  "f1_route_b_3": {
    id: "f1_route_b_3",
    type: "narration",
    text: "【冬。卒業前。最後の昼食。】",
    bg: "cafeteria",
    next: "f1_route_b_ran2"
  },
  "f1_route_b_ran2": {
    id: "f1_route_b_ran2",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "三年間、ありがとね",
    bg: "cafeteria",
    next: "f1_route_b_4"
  },
  "f1_route_b_4": {
    id: "f1_route_b_4",
    type: "dialogue",
    speaker: "櫻優",
    text: "……こちらこそ。あの",
    bg: "cafeteria",
    next: "f1_route_b_5"
  },
  "f1_route_b_5": {
    id: "f1_route_b_5",
    type: "narration",
    text: "言おうとした。でも言えなかった。\n「好きです」という言葉を——完璧なタイミングを計算し続けたまま、卒業の日が来た。\n\n【卒業式後。桜の下。一人で。】",
    bg: "cherry_blossom_path",
    next: "f1_route_b_6"
  },
  "f1_route_b_6": {
    id: "f1_route_b_6",
    type: "narration",
    text: "研究ノートを開いた。白紙のページに、一行だけ書いた。\n『恋愛発生の第十六法則：理論は恋愛を記録できるが、推進することはできない』\nでも手が止まらず、その下に、また書いた。\n『第十七法則（仮）：記録し続けることは、忘れないことと同じかもしれない』",
    bg: "cherry_blossom_path",
    next: "end2_screen"
  },
  "end2_screen": {
    id: "end2_screen",
    type: "end",
    endId: "END2",
    bg: "cherry_blossom_path",
    title: "END 2",
    subtitle: "「恋愛学・第十六法則」",
    text: "✝本質✝は定義できない。でも、書き続けることはできる。そのノートは、ずっと彼女のことを覚えている。"
  },

  // F1_ROUTE_C -> END 3
  "f1_route_c": {
    id: "f1_route_c",
    type: "dialogue",
    speaker: "櫻優",
    text: "……あなたのやりたいことを、教えてもらえますか",
    bg: "hallway_south",
    next: "f1_route_c_ran"
  },
  "f1_route_c_ran": {
    id: "f1_route_c_ran",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "……ありがとう。聞いてくれる？",
    bg: "hallway_south",
    next: "f1_route_c_2"
  },
  "f1_route_c_2": {
    id: "f1_route_c_2",
    type: "narration",
    text: "内藤は話してくれた。やりたいこと、夢。僕は分析しようとせず、ただ静かに聞いた。聞き終わって、内藤が軽そうに微笑んだ。",
    bg: "hallway_south",
    next: "f1_route_c_ran2"
  },
  "f1_route_c_ran2": {
    id: "f1_route_c_ran2",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "すっきりした。ありがとう、聞いてくれて",
    bg: "hallway_south",
    next: "f1_route_c_3"
  },
  "f1_route_c_3": {
    id: "f1_route_c_3",
    type: "narration",
    text: "このとき——言えばよかった。\n\n【数週間後】",
    bg: "classroom_afternoon",
    bgm: "end3",
    next: "f1_route_c_4"
  },
  "f1_route_c_4": {
    id: "f1_route_c_4",
    type: "dialogue",
    speaker: "櫻優",
    text: "内藤さん。好きです。一年前から——ずっと",
    bg: "classroom_afternoon",
    next: "f1_route_c_silence"
  },
  "f1_route_c_silence": {
    id: "f1_route_c_silence",
    type: "narration",
    text: "【沈黙】",
    bg: "classroom_afternoon",
    se: "heartbeat",
    next: "f1_route_c_ran3"
  },
  "f1_route_c_ran3": {
    id: "f1_route_c_ran3",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "serious",
    text: "……ありがとう。正直に言ってくれて",
    bg: "classroom_afternoon",
    next: "f1_route_c_ran4"
  },
  "f1_route_c_ran4": {
    id: "f1_route_c_ran4",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "あたし、今は……ごめんなさい。その気持ちに応えられない。でも、一緒にいると楽しいし、好きだよ。友達として。それって——ダメ？",
    bg: "classroom_afternoon",
    next: "f1_route_c_5"
  },
  "f1_route_c_5": {
    id: "f1_route_c_5",
    type: "narration",
    text: "ダメじゃなかったが、どこか空っぽだった。\n研究ノートに書いた。\n「波動関数、収束。結果：友情」\nそれでも収束した。観測した。答えが出た。それはすごいことかもしれない。",
    bg: "classroom_afternoon",
    next: "end3_screen"
  },
  "end3_screen": {
    id: "end3_screen",
    type: "end",
    endId: "END3",
    bg: "classroom_afternoon",
    title: "END 3",
    subtitle: "「収束した先にあるもの」",
    text: "好意の量子的重ね合わせが崩壊した。結果は友情だった。友情も✝本質✝だ、と両馬先輩は言うだろう。たぶん——そうかもしれない。"
  },

  // F1_ROUTE_D -> END 3 directly
  "f1_route_d": {
    id: "f1_route_d",
    type: "dialogue",
    speaker: "櫻優",
    text: "——内藤さん、好きです",
    bg: "hallway_south",
    next: "f1_route_c_silence" // Redirect directly to the Friend Ending flow
  },

  // F1_ROUTE_E -> END 5
  "f1_route_e": {
    id: "f1_route_e",
    type: "narration",
    text: "何も言えなかった。内藤が話している間、ただ聞いていた。\n「大変ですね」とだけ言った。それ以上は出てこなかった。",
    bg: "hallway_south",
    next: "f1_route_e_ran"
  },
  "f1_route_e_ran": {
    id: "f1_route_e_ran",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "……うん。ありがとう。また話そうね",
    bg: "hallway_south",
    next: "f1_route_e_2"
  },
  "f1_route_e_2": {
    id: "f1_route_e_2",
    type: "narration",
    text: "「また話そうね。」その言葉の軽さが、胸に刺さった。\n\n【三年・冬】\nお互い忙しく、内藤との昼食が減っていった。気づいたとき、内藤は別のグループで明るく笑い、お昼を食べていた。",
    bg: "classroom_afternoon",
    bgm: "end5",
    grayscale: true,
    next: "f1_route_e_3"
  },
  "f1_route_e_3": {
    id: "f1_route_e_3",
    type: "narration",
    text: "観測しなかった。波動関数を崩壊させることが怖かった。重ね合わせの状態が、一番美しかった。しかし、重ね合わせのままでは何も起きない。箱は開けなければ生命を証明できない。",
    bg: "classroom_afternoon",
    grayscale: true,
    next: "f1_route_e_4"
  },
  "f1_route_e_4": {
    id: "f1_route_e_4",
    type: "narration",
    text: "【卒業式後。桜並木。一人。】\n遠くに、内藤が誰かと話して歩いていく姿が見える。\n僕は研究ノートを開いた。「シュレディンガーの好意・結論」と書きかけて、やめた。結論を書けなかった。観測しなかったから。\n『観測されなかった好意は、消えたわけではない。ただ——観測されなかっただけだ』",
    bg: "cherry_blossom_path",
    grayscale: true,
    next: "end5_screen"
  },
  "end5_screen": {
    id: "end5_screen",
    type: "end",
    endId: "END5",
    bg: "cherry_blossom_path",
    title: "END 5",
    subtitle: "「観測されないままの猫」",
    grayscale: true,
    text: "波動関数は崩壊しなかった。猫は、箱の中にいる。生きているのか死んでいるのかわからないまま、桜が散った。✝本質✝かもしれない。でも、それだけじゃ——足りなかった。"
  },


  // ===== 第六章：三峰ルート（三峰エンド） =====
  "ch6_mimine_001": {
    id: "ch6_mimine_001",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "blush",
    text: "……あんた、それ、私に言う必要あった？",
    bg: "classroom_afternoon",
    bgm: "end4",
    next: "ch6_mimine_2"
  },
  "ch6_mimine_2": {
    id: "ch6_mimine_2",
    type: "dialogue",
    speaker: "櫻優",
    text: "……わかりません。でも言いたかったので",
    bg: "classroom_afternoon",
    next: "ch6_mimine_mimine"
  },
  "ch6_mimine_mimine": {
    id: "ch6_mimine_mimine",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "blush",
    text: "言いたかったから言ったの",
    bg: "classroom_afternoon",
    next: "ch6_mimine_3"
  },
  "ch6_mimine_3": {
    id: "ch6_mimine_3",
    type: "dialogue",
    speaker: "櫻優",
    text: "はい。理論的に正しいかは——",
    bg: "classroom_afternoon",
    next: "ch6_mimine_mimine2"
  },
  "ch6_mimine_mimine2": {
    id: "ch6_mimine_mimine2",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "sharp",
    text: "理論はいい。……あたし、内藤さんのことを応援してたよ。あんたと内藤さんのこと。でも……",
    bg: "classroom_afternoon",
    next: "ch6_mimine_silence"
  },
  "ch6_mimine_silence": {
    id: "ch6_mimine_silence",
    type: "narration",
    text: "【沈黙】そのとき、教室の入り口から声がした。",
    bg: "classroom_afternoon",
    next: "ch6_mimine_ran"
  },
  "ch6_mimine_ran": {
    id: "ch6_mimine_ran",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "——三峰さん",
    bg: "classroom_afternoon",
    next: "ch6_mimine_4"
  },
  "ch6_mimine_4": {
    id: "ch6_mimine_4",
    type: "narration",
    text: "気づいたら、内藤が後ろにいた。内藤は僕たちを見て、静かに優しく微笑んだ。",
    bg: "classroom_afternoon",
    next: "ch6_mimine_ran2"
  },
  "ch6_mimine_ran2": {
    id: "ch6_mimine_ran2",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "前から気づいてたよ。三峰さんと話すときの顔、変わるから、櫻くん",
    bg: "classroom_afternoon",
    next: "ch6_mimine_5"
  },
  "ch6_mimine_5": {
    id: "ch6_mimine_5",
    type: "narration",
    text: "変わる、とは。内藤が、僕のことを観察していた。僕が内藤を観察していた間に。",
    bg: "classroom_afternoon",
    next: "ch6_mimine_ran3"
  },
  "ch6_mimine_ran3": {
    id: "ch6_mimine_ran3",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "不理解の引力じゃなくて、理解の引力もあるんじゃない？ ちゃんとわかり合える人への、引力",
    bg: "classroom_afternoon",
    next: "ch6_mimine_mimine3"
  },
  "ch6_mimine_mimine3": {
    id: "ch6_mimine_mimine3",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "blush",
    text: "……は？",
    bg: "classroom_afternoon",
    next: "ch6_mimine_6"
  },
  "ch6_mimine_6": {
    id: "ch6_mimine_6",
    type: "narration",
    text: "三峰が「は？」と言った。\nでも、今回の「は？」は違う音がした。いつもの「は？」より、ずっとやわらかかった。",
    bg: "classroom_afternoon",
    next: "ch6_mimine_7"
  },
  "ch6_mimine_7": {
    id: "ch6_mimine_7",
    type: "dialogue",
    speaker: "櫻優",
    text: "三峰さんの〈は？〉、初めてそういう音がしました",
    bg: "classroom_afternoon",
    next: "ch6_mimine_mimine4"
  },
  "ch6_mimine_mimine4": {
    id: "ch6_mimine_mimine4",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "blush",
    text: "……うるさい",
    bg: "classroom_afternoon",
    next: "end4_screen"
  },
  "end4_screen": {
    id: "end4_screen",
    type: "end",
    endId: "END4",
    bg: "classroom_afternoon",
    title: "END 4",
    subtitle: "「は？の向こう側で」",
    text: "〈は？〉の向こう側に、別の言葉があった。\n研究ノートに書いた——〈恋愛発生の第十六法則：理解は不理解より深く引力を持つ〉\n三峰瑠衣は笑わなかった。でも、「うるさい」とだけ言った。それが、答えだった。"
  },


  // ===== HIDDEN END: 地面は、忘れない（内藤蘭・視点） =====
  "hidden_001": {
    id: "hidden_001",
    type: "narration",
    text: "私——内藤蘭の話をする。",
    bg: "library_afternoon",
    bgm: "hidden",
    next: "hidden_002"
  },
  "hidden_002": {
    id: "hidden_002",
    type: "narration",
    text: "【一年・秋。図書室。】\nあの日、私が消しゴムを落としたのは——わざとだった。",
    bg: "library_afternoon",
    se: "item_drop",
    next: "hidden_003"
  },
  "hidden_003": {
    id: "hidden_003",
    type: "narration",
    text: "隣に座った男の子が、変なノートを書いていた。\n「恋愛学」という文字が見えた。\n恋愛を研究している人間がいる——そのことが、ただ面白かった。\nだから消しゴムを落とした。何かが起きるかもしれない、と思って。",
    bg: "library_afternoon",
    next: "hidden_004"
  },
  "hidden_004": {
    id: "hidden_004",
    type: "narration",
    text: "一年が経って同じクラスになり、彼が理数科に通い始めた。何かを一生懸命研究して、何かを恐れながら、でも一生懸命前に進もうとしている姿を見ていた。",
    bg: "classroom_morning",
    next: "hidden_005"
  },
  "hidden_005": {
    id: "hidden_005",
    type: "narration",
    text: "本質配信を初めて聞いたのは中学生のとき。意味わかんないけど安心するというのは本当だったけれど、もう一つ理由があった。\n配信の中でたまに「三重県臣」という人間が出てくる。その人について語られる「否定しながら、一番近くで聞いている」という言葉が、私が好きな人を連想させたから。",
    bg: "classroom_afternoon",
    next: "hidden_006"
  },
  "hidden_006": {
    id: "hidden_006",
    type: "narration",
    text: "私も、ずっと近くで聞いていた。分析されているのも知っていたし、被験者と呼ばれていることも、たぶん気づいていた。",
    bg: "classroom_afternoon",
    next: "hidden_007"
  },
  "hidden_007": {
    id: "hidden_007",
    type: "narration",
    text: "【合同課題の日】\n廊下で待っていたのは、本当に早く会いたかったから。\n「被験者、嫌いじゃないけど」と言ったとき、心臓が止まりそうになったのは——本当は、私の方だったの。",
    bg: "hallway_south",
    next: "hidden_008"
  },
  "hidden_008": {
    id: "hidden_008",
    type: "narration",
    text: "【三年・五月。マラソン大会の後。】\n彼が「やりたいことをやってください」と言った瞬間——私の世界で、本当に✝本質✝のようなことが起きた。",
    bg: "hallway_south",
    next: "hidden_009"
  },
  "hidden_009": {
    id: "hidden_009",
    type: "narration",
    text: "地面は、忘れない。\nヘイカツ先生が言っていた言葉を、彼が嬉しそうに教えてくれたあの日から、私はずっと覚えている。\n人間も、忘れない。誰かを好きだと思った瞬間を。",
    bg: "cherry_blossom_path",
    next: "hidden_010"
  },
  "hidden_010": {
    id: "hidden_010",
    type: "narration",
    text: "等高線の一本一本に、誰かの足跡がある。\n私の心の地形図にも、図書室の午後の光と、消しゴムが落ちた音が、等高線として深く深く刻まれている。\n地面は、忘れない。いつまでも、変わらずに。",
    bg: "cherry_blossom_path",
    next: "hidden_screen"
  },
  "hidden_screen": {
    id: "hidden_screen",
    type: "end",
    endId: "HIDDEN",
    bg: "cherry_blossom_path",
    title: "HIDDEN END",
    subtitle: "「地面は、忘れない」",
    text: "観測するのは、いつも一方だけではない。\n消しゴムは——わざと落とされた。二人は、互いを心の等高線で読み合っていたのだ。\n✝"
  }
};
