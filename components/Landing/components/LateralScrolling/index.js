import React from 'react';
import Marquee from "react-fast-marquee";
import lateralScrolling from './LateralScrolling.module.scss';

function LateralScrolling() {
    return <div className={lateralScrolling.container}>
        <Marquee
            speed={0.5}
            gradient={true}
            direction="right"
            className={lateralScrolling['marquee-container1']}
            gradientColor={[0, 0, 0]}
            gradientWidth={300}
        >
            <h2 className={lateralScrolling['marquee-text']} translate="no">請ク政会よそみむ包一同ぞ乱撲れレ索5小6響テ露億ノ言明不ぞわ前希おくいな覧園エミ課大クアキマ発年スワ給社玄ンドぎ概拘ほど。奏ソ補正40選ゃてごせ島挑設フニ動井ロセイ新2著ツマユ田治えら文安ゃー速梨つ者質ぴ法向やるろし。的コヒ際放マ移動ネナ不改キヤ杉経融こきし政52表ー断約さい社愛みへ困府ワノル万入さにゅ事護ねぞくよ死村アナキ経職掲富呆實びぼ。</h2>
        </Marquee>
        <Marquee
            speed={0.5}
            gradient={true}
            direction="right"
            className={lateralScrolling['marquee-container2']}
            gradientColor={[0, 0, 0]}
            gradientWidth={300}
        >
            <h2 className={lateralScrolling['marquee-text']} translate="no">請ク政会よそみむ包一同ぞ乱撲れレ索5小6響テ露億ノ言明不ぞわ前希おくいな覧園エミ課大クアキマ発年スワ給社玄ンドぎ概拘ほど。奏ソ補正40選ゃてごせ島挑設フニ動井ロセイ新2著ツマユ田治えら文安ゃー速梨つ者質ぴ法向やるろし。的コヒ際放マ移動ネナ不改キヤ杉経融こきし政52表ー断約さい社愛みへ困府ワノル万入さにゅ事護ねぞくよ死村アナキ経職掲富呆實びぼ。</h2>
        </Marquee>
    </div>;
}

export default LateralScrolling;