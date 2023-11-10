import React, { useState } from 'react'

export default function FAQ() {
    const [number, setNumber] = useState(0)
    const togglefn = (index)=>{
        if (number == index) {
            setNumber(0)
        } else{
            setNumber(index)
        }
    }
    return (
        <div className="_a5x4">
            <div className="_8h4z _8h4- _a4zf" style={{ boxSizing: "border-box" }}>
                <div
                    className="_21op _8h4d"
                    style={{ backgroundColor: "#F1F4F7", boxSizing: "border-box" }}
                />
            </div>
            <span id="faq" className="_9ljp" data-label="faq" />
            <div className="_a5gf _a5gp _a5i9 _a5jm" />
            <div className="_a5fu _a9w7 _a5x3">
                <div className="_a5eb _allk _a5ec _a5ee _a5ek _a5er _a5fo _a5fv _a5fw _ajr_">
                    <div className="_a5eb _allk _a5ec _a5eg _a5ep _a5er _a5d5 _a5de _a5du _a5dv">
                        <h2 className="_a92o _amqv _a5w7 _a5ct" style={{ color: "#1C2B33" }}>
                            FAQs
                        </h2>
                        <p className="_a92o _am_b _a5w7 _a5ct" style={{ color: "#1C2B33" }}>
                            We’ve included some frequently asked questions below. For more, visit
                            our Help Center on{" "}
                            <a
                                className="_a6eh _a6rw _a6ee _a6el"
                                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fhelp.instagram.com%2F1318901965540571&h=AT15Ua95LbJonmuki-9bZJ9Mbc6AmN--0Q7E-kN7bIFf9fmNen8Bxg3w2dbJzfOETmZi-hhM2wj8UlK82sk5PpQl6IRgSHDdYW5KDgtSjykVgdU3PUsAh4c7_5M0HuK9QLhamK6JNIkDouD3rbT788-VN35vIXPBY6-xoKa4Txs"
                                data-ms-clickable="true"
                                data-ms='{"creative":"click_external-link","creative_detail":"faq_facebook-help-center"}'
                                target="_blank"
                                rel="noreferrer noopener nofollow"
                                data-lynx-mode="asynclazy"
                                id="u_0_11_b3"
                                style={{ color: "#0064E0" }}
                                aria-label="Instagram (opens in new tab)"
                            >
                                Instagram
                            </a>{" "}
                            or{" "}
                            <a
                                className="_a6eh _a6rw _a6ee _a6el"
                                href="https://www.facebook.com/help/565322618581808"
                                data-ms-clickable="true"
                                data-ms='{"creative":"click_external-link","creative_detail":"faq_instagram-help-center"}'
                                target="_blank"
                                rel="noreferrer noopener"
                                id="u_0_12_IN"
                                style={{ color: "#0064E0" }}
                                aria-label="Facebook (opens in new tab)"
                            >
                                Facebook
                            </a>
                            .
                        </p>
                        <div className="_a5gf _a5gi _a5i4 _a5ji" />
                        <div className="_a5gf _a5gn _a5i9" />
                    </div>
                    <div className="_a5eb _allk _a5ec _a5eg _a5ep _a5er _a5d5 _a5di _a5du _a5dv">
                        <div
                            className="_a6kp"
                            data-testid="drawer-group"
                            id="u_0_13_0M"
                            data-is-initialized="true"
                        >
                            <div
                                className="_a6jb _a6ts"
                                data-testid="drawer"
                                id="u_0_14_2X"
                                data-is-initialized="true"
                            >
                                <button
                                    className={`${number == 1 ? "_a6iy _albs _a6ix": "_a6iy _albs _a6iw"}`}
                                    data-testid="drawer-tab"
                                    onClick={()=>togglefn(1)}
                                    aria-controls="u_0_0_4Q"
                                    data-ms='{"creative":"accordion","creative_detail":"This service isn\u2019t available in my region. How can I stay informed?"}'
                                >
                                    <div className="_9bhp _9bhq _9bhs _9bh3">
                                        <div className="_a82a">
                                            <p className="_a92o _am_5 _a5w7">
                                                This service isn’t available in my region. How can I stay
                                                informed?
                                            </p>
                                        </div>
                                        <div className="_a6jc _a6jd" data-testid="toggle-icon">
                                            <div className="_a6i_" />
                                        </div>
                                    </div>
                                </button>
                                <div
                                    id="u_0_0_4Q"
                                    className="_a6iz"
                                    data-testid="drawer-section"
                                    data-is-collapsed={number == 1 ? "false" : "true"}
                                    data-is-transitioning="false"
                                    style={number == 1 ? { visibility: "visible", height: "auto" }:{ visibility: "hidden", overflow: "hidden", height: 0 }}
                                >
                                    <div className="_a6jf">
                                        <p className="_a92o _am_d _a5w7 _a5ct">
                                            Join our waitlist on{" "}
                                            <a
                                                className="_a6eh _a6rw _a6ee _a6el"
                                                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Facredirect%2F%3Fdeeplink_destination%3Dupgrade_account%26entrypoint%3Dmeta_site&h=AT1sQL3uguJ5aEt2Rlw62JybMsDlIsq8YzFhyApJeYpQeS67giInLndYELQNXdxiGZyu2rA6rkuOmV3dN5Fl36NLxcbxAnA4s6R7ArXl3aTFDlR0CoBIOwdNVvCM5q5z_BuT-JNhWqW7xfckvoGZugntD1mOrwEGF9VeBMhLy2I"
                                                data-ms-clickable="true"
                                                data-ms='{"creative":"click_external-link","creative_detail":"faq-service-isnt-available-in-region_instagram"}'
                                                target="_blank"
                                                rel="noreferrer noopener nofollow"
                                                data-lynx-mode="asynclazy"
                                                id="u_0_15_VG"
                                                style={{ color: "#0064E0" }}
                                                aria-label="Instagram (opens in new tab)"
                                            >
                                                Instagram
                                            </a>{" "}
                                            or{" "}
                                            <a
                                                className="_a6eh _a6rw _a6ee _a6el"
                                                href="https://www.facebook.com/acredirect/?deeplink_destination=upgrade_account&entrypoint=meta_site"
                                                data-ms-clickable="true"
                                                data-ms='{"creative":"click_external-link","creative_detail":"faq-service-isnt-available-in-region_facebook"}'
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                id="u_0_16_ks"
                                                style={{ color: "#0064E0" }}
                                                aria-label="Facebook (opens in new tab)"
                                            >
                                                Facebook
                                            </a>{" "}
                                            to stay updated. We will notify you when Meta Verified is
                                            available in your region if you are eligible. Joining the
                                            waitlist does not guarantee early access to Meta Verified.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="_a6jb _a6ts"
                                data-testid="drawer"
                                id="u_0_17_Gd"
                                data-is-initialized="true"
                            >
                                <button
                                    className={`${number == 2 ? "_a6iy _albs _a6ix": "_a6iy _albs _a6iw"}`}
                                    data-testid="drawer-tab"
                                    onClick={()=>togglefn(2)}
                                    aria-controls="u_0_1_29"
                                    data-ms='{"creative":"accordion","creative_detail":"How do I know if I\u2019m eligible?"}'
                                >
                                    <div className="_9bhp _9bhq _9bhs _9bh3">
                                        <div className="_a82a">
                                            <p className="_a92o _am_5 _a5w7">
                                                How do I know if I’m eligible?
                                            </p>
                                        </div>
                                        <div className="_a6jc _a6jd" data-testid="toggle-icon">
                                            <div className="_a6i_" />
                                        </div>
                                    </div>
                                </button>
                                <div
                                    id="u_0_1_29"
                                    className="_a6iz"
                                    data-testid="drawer-section"
                                    data-is-collapsed={number == 2 ? "false" : "true"}
                                    data-is-transitioning="false"
                                    style={number == 2 ? { visibility: "visible", height: "auto" }:{ visibility: "hidden", overflow: "hidden", height: 0 }}
                                >
                                    <div className="_a6jf">
                                        <p className="_a92o _am_d _a5w7 _a5ct">
                                            Meta Verified is available on Instagram and Facebook in select
                                            regions. It is for people 18 years or older and is now
                                            expanding to businesses. Learn more about who can subscribe to
                                            Meta Verified for creators on{" "}
                                            <a
                                                className="_a6eh _a6rw _a6ee _a6el"
                                                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fhelp.instagram.com%2F2419286908233223&h=AT1WcAwIqy3pYUVNRqF0ZBZWY1R6h_dUZKhTCauPNbkyLO3Y8ewkVu7ekcJatEtbRdEuH4LiCVvDXeuS8KPb8j0SrXue34krLAr3sPHj2rsm4xzLXEPpFtoaMFgGwxPaWpWA0P41IIr8fPYBEWudPRIxsoguyOE1vf562O0uy4M"
                                                data-ms-clickable="true"
                                                data-ms='{"creative":"click_external-link","creative_detail":"faq-eligible_instagram"}'
                                                target="_blank"
                                                rel="noreferrer noopener nofollow"
                                                data-lynx-mode="asynclazy"
                                                id="u_0_18_Aw"
                                                style={{ color: "#0064E0" }}
                                                aria-label="Instagram (opens in new tab)"
                                            >
                                                Instagram
                                            </a>{" "}
                                            and{" "}
                                            <a
                                                className="_a6eh _a6rw _a6ee _a6el"
                                                href="https://www.facebook.com/help/596285382333151"
                                                data-ms-clickable="true"
                                                data-ms='{"creative":"click_external-link","creative_detail":"faq-eligible_facebook"}'
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                id="u_0_19_O3"
                                                style={{ color: "#0064E0" }}
                                                aria-label="Facebook (opens in new tab)"
                                            >
                                                Facebook
                                            </a>{" "}
                                            and for{" "}
                                            <a
                                                className="_a6eh _a6rw _a6ee _a6el"
                                                href="https://facebook.com/business/tools/meta-verified-for-business?entry_point=meta_site"
                                                data-ms-clickable="true"
                                                data-ms='{"creative":"click_external-link","creative_detail":"faq-eligible_meta-verified-for-business"}'
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                id="u_0_1a_3f"
                                                style={{ color: "#0064E0" }}
                                                aria-label="businesses (opens in new tab)"
                                            >
                                                businesses
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="_a6jb _a6ts"
                                data-testid="drawer"
                                id="u_0_1b_5z"
                                data-is-initialized="true"
                            >
                                <button
                                    className={`${number == 3 ? "_a6iy _albs _a6ix": "_a6iy _albs _a6iw"}`}
                                    data-testid="drawer-tab"
                                    onClick={()=>togglefn(3)}
                                    aria-controls="u_0_2_vg"
                                    data-ms='{"creative":"accordion","creative_detail":"I already have a verified badge. What happens to it?"}'
                                >
                                    <div className="_9bhp _9bhq _9bhs _9bh3">
                                        <div className="_a82a">
                                            <p className="_a92o _am_5 _a5w7">
                                                I already have a verified badge. What happens to it?
                                            </p>
                                        </div>
                                        <div className="_a6jc _a6jd" data-testid="toggle-icon">
                                            <div className="_a6i_" />
                                        </div>
                                    </div>
                                </button>
                                <div
                                    id="u_0_2_vg"
                                    className="_a6iz"
                                    data-testid="drawer-section"
                                    data-is-collapsed={number == 3 ? "false" : "true"}
                                    data-is-transitioning="false"
                                    style={number == 3 ? { visibility: "visible", height: "auto" }:{ visibility: "hidden", overflow: "hidden", height: 0 }}
                                >
                                    <div className="_a6jf">
                                        <p className="_a92o _am_d _a5w7 _a5ct">
                                            As we test and learn, there will be no changes to accounts on
                                            Instagram or Facebook that are already verified based on prior
                                            requirements. Existing verified badge holders can also apply
                                            for a Meta Verified subscription if they meet the eligibility
                                            requirements. Learn more about eligibility requirements on{" "}
                                            <a
                                                className="_a6eh _a6rw _a6ee _a6el"
                                                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fhelp.instagram.com%2F2419286908233223&h=AT3LbkavwQgT3FiBWV6EE4WuJzICWseDK0n0F2W1LSmDOHfL_AWL1zxAxn7xHh4FeF42Pkhie7skAR9Vl43-JxZmRNWjNUllAXSVRdVfT7TEBB1iC-9Fvcl1BPrWbf-Nd2jhWtkTyq145ZcneJhssGtz3zJSdU27vHlLV6hvG6c"
                                                data-ms-clickable="true"
                                                data-ms='{"creative":"click_external-link","creative_detail":"faq-verified-badge_instagram"}'
                                                target="_blank"
                                                rel="noreferrer noopener nofollow"
                                                data-lynx-mode="asynclazy"
                                                id="u_0_1c_oO"
                                                style={{ color: "#0064E0" }}
                                                aria-label="Instagram (opens in new tab)"
                                            >
                                                Instagram
                                            </a>{" "}
                                            and{" "}
                                            <a
                                                className="_a6eh _a6rw _a6ee _a6el"
                                                href="https://www.facebook.com/help/596285382333151"
                                                data-ms-clickable="true"
                                                data-ms='{"creative":"click_external-link","creative_detail":"faq-verified-badge_facebook"}'
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                id="u_0_1d_i/"
                                                style={{ color: "#0064E0" }}
                                                aria-label="Facebook (opens in new tab)"
                                            >
                                                Facebook
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="_a6jb _a6ts"
                                data-testid="drawer"
                                id="u_0_1e_Ko"
                                data-is-initialized="true"
                            >
                                <button
                                    className={`${number == 4 ? "_a6iy _albs _a6ix": "_a6iy _albs _a6iw"}`}
                                    data-testid="drawer-tab"
                                    onClick={()=>togglefn(4)}
                                    aria-controls="u_0_3_Ly"
                                    data-ms='{"creative":"accordion","creative_detail":"What is the verification process?"}'
                                >
                                    <div className="_9bhp _9bhq _9bhs _9bh3">
                                        <div className="_a82a">
                                            <p className="_a92o _am_5 _a5w7">
                                                What is the verification process?
                                            </p>
                                        </div>
                                        <div className="_a6jc _a6jd" data-testid="toggle-icon">
                                            <div className="_a6i_" />
                                        </div>
                                    </div>
                                </button>
                                <div
                                    id="u_0_3_Ly"
                                    className="_a6iz"
                                    data-testid="drawer-section"
                                    data-is-collapsed={number == 4 ? "false" : "true"}
                                    data-is-transitioning="false"
                                    style={number == 4 ? { visibility: "visible", height: "auto" }:{ visibility: "hidden", overflow: "hidden", height: 0 }}
                                >
                                    <div className="_a6jf">
                                        <p className="_a92o _am_d _a5w7 _a5ct">
                                            You will be asked to provide a government-issued ID and, in
                                            select regions, may be asked to submit a selfie video so we
                                            can confirm your identity before being approved for a Meta
                                            Verified subscription. The ID must match the profile name and
                                            photo of the Instagram or Facebook account you’re applying
                                            for. Once your profile is verified, you can’t change your
                                            username or date of birth on your profile without going
                                            through the Meta Verified subscription and verification
                                            application process again. Learn more about the verification
                                            process on{" "}
                                            <a
                                                className="_a6eh _a6rw _a6ee _a6el"
                                                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fhelp.instagram.com%2F732454618598400&h=AT0uuOtLBBfYuorENFh5g-tholX9GaM8Tc2-lLAJVFWjrHequRWFXxuZHwJMRBhzle04xoX20bIuG3-RYzHhvLiYRtNUb6tfIYXV9qTA92xge0YvadiOowNaJDsiosntOwjo3xu7ochRfRCDWIxH8KxoVwEUYomREtKHTfWjpCxtZ-JBaHd4vb9_"
                                                data-ms-clickable="true"
                                                data-ms='{"creative":"click_external-link","creative_detail":"faq-what-is-verification-process_instagram"}'
                                                target="_blank"
                                                rel="noreferrer noopener nofollow"
                                                data-lynx-mode="async"
                                                id="u_0_1f_I/"
                                                style={{ color: "#0064E0" }}
                                                aria-label="Instagram (opens in new tab)"
                                            >
                                                Instagram
                                            </a>{" "}
                                            and{" "}
                                            <a
                                                className="_a6eh _a6rw _a6ee _a6el"
                                                href="https://www.facebook.com/help/734864594628372"
                                                data-ms-clickable="true"
                                                data-ms='{"creative":"click_external-link","creative_detail":"faq-what-is-verification-process_facebook"}'
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                id="u_0_1g_gz"
                                                style={{ color: "#0064E0" }}
                                                aria-label="Facebook (opens in new tab)"
                                            >
                                                Facebook
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="_a6jb _a6ts"
                                data-testid="drawer"
                                id="u_0_1h_bY"
                                data-is-initialized="true"
                            >
                                <button
                                    className={`${number == 5 ? "_a6iy _albs _a6ix": "_a6iy _albs _a6iw"}`}
                                    data-testid="drawer-tab"
                                    onClick={()=>togglefn(5)}
                                    aria-controls="u_0_4_IB"
                                    data-ms='{"creative":"accordion","creative_detail":"Can I use one Meta Verified for creators subscription on both Instagram and Facebook?"}'
                                >
                                    <div className="_9bhp _9bhq _9bhs _9bh3">
                                        <div className="_a82a">
                                            <p className="_a92o _am_5 _a5w7">
                                                Can I use one Meta Verified for creators subscription on
                                                both Instagram and Facebook?
                                            </p>
                                        </div>
                                        <div className="_a6jc _a6jd" data-testid="toggle-icon">
                                            <div className="_a6i_" />
                                        </div>
                                    </div>
                                </button>
                                <div
                                    id="u_0_4_IB"
                                    className="_a6iz"
                                    data-testid="drawer-section"
                                    data-is-collapsed={number == 5 ? "false" : "true"}
                                    data-is-transitioning="false"
                                    style={number == 5 ? { visibility: "visible", height: "auto" }:{ visibility: "hidden", overflow: "hidden", height: 0 }}
                                >
                                    <div className="_a6jf">
                                        <p className="_a92o _am_d _a5w7 _a5ct">
                                            No. To use Meta Verified on both Instagram and Facebook, you
                                            must subscribe on each app separately. However, currently if
                                            you subscribe on Facebook, your verified badge will also
                                            appear on Messenger.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="_a6jb _a6ts"
                                data-testid="drawer"
                                id="u_0_1i_aF"
                                data-is-initialized="true"
                            >
                                <button
                                    className={`${number == 6 ? "_a6iy _albs _a6ix": "_a6iy _albs _a6iw"}`}
                                    data-testid="drawer-tab"
                                    onClick={()=>togglefn(6)}
                                    aria-controls="u_0_5_Yy"
                                    data-ms='{"creative":"accordion","creative_detail":"What is the price to subscribe to Meta Verified for creators?"}'
                                >
                                    <div className="_9bhp _9bhq _9bhs _9bh3">
                                        <div className="_a82a">
                                            <p className="_a92o _am_5 _a5w7">
                                                What is the price to subscribe to Meta Verified for
                                                creators?
                                            </p>
                                        </div>
                                        <div className="_a6jc _a6jd" data-testid="toggle-icon">
                                            <div className="_a6i_" />
                                        </div>
                                    </div>
                                </button>
                                <div
                                    id="u_0_5_Yy"
                                    className="_a6iz"
                                    data-testid="drawer-section"
                                    data-is-collapsed={number == 6 ? "false" : "true"}
                                    data-is-transitioning="false"
                                    style={number == 6 ? { visibility: "visible", height: "auto" }:{ visibility: "hidden", overflow: "hidden", height: 0 }}
                                >
                                    <div className="_a6jf">
                                        <div className="_a5ci _a5cs _a92o _am_d _a5w7 _a5ct">
                                            <p>
                                                Meta Verified for creators is generally available in most
                                                regions for USD $11.99 when you subscribe from the web
                                                (Facebook only) and USD $14.99 when you subscribe within the
                                                app. You can begin the Meta Verified onboarding experience
                                                on{" "}
                                                <a
                                                    className="_a6eh _a6rw _a6ee _a6el"
                                                    href="https://www.facebook.com/acredirect/?deeplink_destination=upgrade_account&entrypoint=meta_site"
                                                    data-ms-clickable="true"
                                                    data-ms='{"creative":"click_external-link","creative_detail":"faq-what-is-the-price-to-subscribe-to-meta-verified_facebook"}'
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                    id="u_0_1j_lp"
                                                    style={{ color: "#0064E0" }}
                                                    aria-label="Facebook (opens in new tab)"
                                                >
                                                    Facebook
                                                </a>{" "}
                                                or{" "}
                                                <a
                                                    className="_a6eh _a6rw _a6ee _a6el"
                                                    href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Facredirect%2F%3Fdeeplink_destination%3Dupgrade_account%26entrypoint%3Dmeta_site&h=AT37dSGmqroJKPajiC83UF3e6yQH7gqxFbq1atScQBe2HcxQjiSal01aC2hDObPMq1rimCx-pNssN_W0pYTw_tgvzD3q7A9FEEu8QetX6pUU6tRrTRORrdL6T4-MpfhsHnWvokSQJhFpZqQtS61BQXPJRCHklx-tUc5C51SdlDU"
                                                    data-ms-clickable="true"
                                                    data-ms='{"creative":"click_external-link","creative_detail":"faq-what-is-the-price-to-subscribe-to-meta-verified_instagram"}'
                                                    target="_blank"
                                                    rel="noreferrer noopener nofollow"
                                                    data-lynx-mode="asynclazy"
                                                    id="u_0_1k_u9"
                                                    style={{ color: "#0064E0" }}
                                                    aria-label="Instagram (opens in new tab)"
                                                >
                                                    Instagram
                                                </a>{" "}
                                                to see local pricing for your market.
                                            </p>
                                            <p>
                                                <i>
                                                    *Pricing may not be available if Meta Verified has not yet
                                                    rolled out in your region.
                                                </i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="_a6jb _a6ts"
                                data-testid="drawer"
                                id="u_0_1l_N4"
                                data-is-initialized="true"
                            >
                                <button
                                    className={`${number == 7 ? "_a6iy _albs _a6ix": "_a6iy _albs _a6iw"}`}
                                    data-testid="drawer-tab"
                                    onClick={()=>togglefn(7)}
                                    aria-controls="u_0_6_mM"
                                    data-ms='{"creative":"accordion","creative_detail":"What if I\u2019m interested in Meta Verified for businesses?"}'
                                >
                                    <div className="_9bhp _9bhq _9bhs _9bh3">
                                        <div className="_a82a">
                                            <p className="_a92o _am_5 _a5w7">
                                                What if I’m interested in Meta Verified for businesses?
                                            </p>
                                        </div>
                                        <div className="_a6jc _a6jd" data-testid="toggle-icon">
                                            <div className="_a6i_" />
                                        </div>
                                    </div>
                                </button>
                                <div
                                    id="u_0_6_mM"
                                    className="_a6iz"
                                    data-testid="drawer-section"
                                    data-is-collapsed={number == 7 ? "false" : "true"}
                                    data-is-transitioning="false"
                                    style={number == 7 ? { visibility: "visible", height: "auto" }:{ visibility: "hidden", overflow: "hidden", height: 0 }}
                                >
                                    <div className="_a6jf">
                                        <p className="_a92o _am_d _a5w7 _a5ct">
                                            Meta Verified is now expanding to businesses. You can learn
                                            more and sign up on the{" "}
                                            <a
                                                className="_a6eh _a6rw _a6ee _a6el"
                                                href="https://facebook.com/business/tools/meta-verified-for-business?entry_point=meta_site"
                                                data-ms-clickable="true"
                                                data-ms='{"creative":"click_external-link","creative_detail":"faq-interested_meta-verified-for-business"}'
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                id="u_0_1m_Yj"
                                                style={{ color: "#0064E0" }}
                                                aria-label="Meta Verified for businesses website (opens in new tab)"
                                            >
                                                Meta Verified for businesses website
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="_a5gf _a5gp _a5i9 _a5jm" />
        </div>

    )
}
