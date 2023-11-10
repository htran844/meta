import Aos from 'aos';
import "aos/dist/aos.css"
import React, { useEffect, useState } from 'react'

export default function Intro() {
    window.addEventListener('resize', checkResize);
    const [urlback, setUrl] = useState("url(https://scontent.fhan3-2.fna.fbcdn.net/v/t39.8562-6/376751083_834914768201822_6874666537252247736_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f537c7&_nc_ohc=jLptaRbDmGkAX_Ta0MM&_nc_ht=scontent.fhan3-2.fna&oh=00_AfDOeUxd0EVtNxsreD9xbJ7Q6JnVWPYPyUfwhVRQDl4mYQ&oe=6552027D")
    const [sizeimg, setimg] = useState(86)
    function checkResize() {
        console.log("rezre", window.screen.width)
        if (window.screen.width >= 1024) {
            setimg(86)
            setUrl("url(https://scontent.fhan3-2.fna.fbcdn.net/v/t39.8562-6/376751083_834914768201822_6874666537252247736_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f537c7&_nc_ohc=jLptaRbDmGkAX_Ta0MM&_nc_ht=scontent.fhan3-2.fna&oh=00_AfDOeUxd0EVtNxsreD9xbJ7Q6JnVWPYPyUfwhVRQDl4mYQ&oe=6552027D)")
        } else if (window.screen.width >= 768) {
            setimg(49)
            setUrl("url(https://scontent.fhan3-1.fna.fbcdn.net/v/t39.8562-6/333063949_526547116208049_8920338120809819840_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f537c7&_nc_ohc=DgY7cqWbrAYAX_fG7hT&_nc_ht=scontent.fhan3-1.fna&oh=00_AfC8c83bfPdhZuA6qMksQwsV1r4oLHUEe7eOnDmGeSFvxg&oe=65517A62)")
        } else {
            setUrl("url(https://scontent.fhan3-2.fna.fbcdn.net/v/t39.8562-6/337354606_746529453682598_4255232545954343113_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f537c7&_nc_ohc=X4BbaoBANJUAX-Dc5i0&_nc_ht=scontent.fhan3-2.fna&oh=00_AfAlETNstL7RQzigywIGpIQLNNOgWIPL9caIDav_KnJesw&oe=65532E00)")
        }
    }
    useEffect(()=>{
        if (window.screen.width >= 1024) {
            setimg(86)
            setUrl("url(https://scontent.fhan3-2.fna.fbcdn.net/v/t39.8562-6/376751083_834914768201822_6874666537252247736_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f537c7&_nc_ohc=jLptaRbDmGkAX_Ta0MM&_nc_ht=scontent.fhan3-2.fna&oh=00_AfDOeUxd0EVtNxsreD9xbJ7Q6JnVWPYPyUfwhVRQDl4mYQ&oe=6552027D)")
        } else if (window.screen.width >= 768) {
            setimg(49)
            setUrl("url(https://scontent.fhan3-1.fna.fbcdn.net/v/t39.8562-6/333063949_526547116208049_8920338120809819840_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f537c7&_nc_ohc=DgY7cqWbrAYAX_fG7hT&_nc_ht=scontent.fhan3-1.fna&oh=00_AfCwdm7KPyxoda6yKrgystyTrC-KCY0pbjfMCs6ZE9O5mg&oe=655374A2)")
        } else {
            setUrl("url(https://scontent.fhan3-2.fna.fbcdn.net/v/t39.8562-6/337354606_746529453682598_4255232545954343113_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f537c7&_nc_ohc=X4BbaoBANJUAX-Dc5i0&_nc_ht=scontent.fhan3-2.fna&oh=00_AfAlETNstL7RQzigywIGpIQLNNOgWIPL9caIDav_KnJesw&oe=65532E00)")
        }
    }, [])

    useEffect(()=>{
        Aos.init();
    },[])

    return (
        <div className="_a5x4">
            <div className="_a69f _a69g _amwl" id="u_0_j_ue">
                <style
                    nonce=""
                    dangerouslySetInnerHTML={{
                        __html:
                            '@media(max-width:767px){._a69i._aoby._ao-r[data-scoped-css="fullscreen-hero-scoped-u_0_7_R7"]{max-width:345px; align-self: flex-start; margin-top: 100px; padding: 0 0 0 32px;}}@media(min-width:768px) and (max-width:1023px){._a69i._aoby._ao-r[data-scoped-css="fullscreen-hero-scoped-u_0_7_R7"]{max-width: 460px; align-self: flex-end; margin-bottom: 80px; padding: 0 32px;}}@media(min-width:1024px){._a69i._aoby._ao-r[data-scoped-css="fullscreen-hero-scoped-u_0_7_R7"]{max-width: 640px;}}'
                    }}
                />
                <div className="_8h4z _8h4- _a4zf">
                    <img
                        className="_8h4i _21op _8h4d _8h56 img"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/-PAXP-deijE.gif"
                        alt="Facebook and Instagram verified users "
                        id="u_0_k_U9"
                        style={{
                            boxSizing: "border-box",
                            backgroundImage: urlback
                        }}
                    />
                </div>
                <div
                    data-scoped-css="fullscreen-hero-scoped-u_0_7_R7"
                    className="_a69i _aoby _ao-r"
                    // data-aos="slide-up"
                >
                    <div
                        className="_a62m _a63- _a62r _a641 _aizo _9r-x _9bc-"
                        style={{ transitionDelay: "0s" }}
                        id="u_0_l_x9"
                    >
                        <img
                            className="_8h4h img"
                            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.8562-6/375593064_778731280602001_6601361369208148137_n.png?_nc_cat=106&ccb=1-7&_nc_sid=f537c7&_nc_ohc=hxx06rW57WEAX9HHd38&_nc_oc=AQnXTJyUBdcj9mHbw62PsX4CMPeze3jKEu50husu8OC4ObekRD51vH_xF12c_r2pY5UB-_dHwKuFjyIcoAarVm7O&_nc_ht=scontent.fhan14-2.fna&oh=00_AfAr-bOC2NDXXGayjH2-gfHIGppMWdgEnuclhKTs5T39JQ&oe=6551DE8B"
                            height={49}
                            width={49}
                            alt="Verification Badge Icon"
                            id="u_0_m_xE"
                            style={{ boxSizing: "border-box", width: sizeimg, height: sizeimg }}
                        />
                    </div>
                    <div
                        className="_a62m _a63- _a62r _a641 _aizo _9r-x _9bc-"
                        style={{ transitionDelay: "65ms" }}
                        id="u_0_n_T9"
                    >
                        <h1 className="_a92o _amqv _a5w7 _a5ct" style={{ color: "#1C2B33" }}>
                            Become <br />
                            Meta<span>&nbsp;</span>Verified
                        </h1>
                    </div>
                    <div
                        className="_a62m _a63- _a62r _a641 _aizo _9r-x _9bc-"
                        style={{ transitionDelay: "130ms" }}
                        id="u_0_o_7W"
                    >
                        <p className="_a92o _am_d _a5w7" style={{ color: "#1C2B33" }}>
                            Grow your social presence with Meta Verified, a new subscription
                            bundle available for creators and businesses on Instagram and
                            Facebook.
                        </p>
                    </div>
                    <div
                        className="_a62m _a63- _a62r _a641 _aizo _9r-x _9bc-"
                        style={{ transitionDelay: "195ms" }}
                        id="u_0_p_+B"
                    >
                        <div className="_a5gf _a5gj _a5i5 _a5jj">
                            <p className="_a92o _am_e _a5w7">Sign up now for creators</p>
                        </div>
                        <div className="_a5gf _a5gi _a5i4 _a5ji">
                            <a
                                className="_a6rw _a6ee _a6eo _amqm _amqo _amqn _ao9y"
                                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Facredirect%2F%3Fdeeplink_destination%3Dupgrade_account%26entrypoint%3Dmeta_site&h=AT0KpxHB0mdGzjDsCVEf6Qy9iT7XiSZ7uoeBMBvxnJs1jmoXIydpcBp9eX9kVrCXDHARVrDsD-1c9sj7BUBwC_Jf6xdf8AqwOR7NwKQe9O1cQZLJFCKk2i4-7q9IMobr9pW4v66EKCD1o5RjZ3GqtfhB8uGn1DiYtrar"
                                data-ms-clickable="true"
                                data-ms='{"creative":"click_external-link","creative_detail":"subscribe-instagram"}'
                                target="_blank"
                                rel="noreferrer noopener nofollow"
                                data-lynx-mode="asynclazy"
                                id="u_0_q_lw"
                                style={{}}
                                aria-label="Instagram (opens in new tab)"
                            >
                                Instagram
                            </a>
                            <a
                                className="_a6rw _a6ee _a6eo _amqm _amqo _ao9y"
                                href="https://www.facebook.com/acredirect/?deeplink_destination=upgrade_account&entrypoint=meta_site"
                                data-ms-clickable="true"
                                data-ms='{"creative":"click_external-link","creative_detail":"subscribe-facebook"}'
                                target="_blank"
                                rel="noreferrer noopener"
                                id="u_0_r_EJ"
                                style={{}}
                                aria-label="Facebook (opens in new tab)"
                            >
                                Facebook
                            </a>
                        </div>
                        <div className="_a5gf _a5gj _a5i5 _a5jj">
                            <p className="_a92o _am_f _a5w7">
                                <b>Are you a business?</b> Get more information on
                                <br />
                                <a
                                    className="_a6eh _a6rw _a6ee _a6el"
                                    href="https://www.facebook.com/business/tools/meta-verified-for-business?entry_point=meta_site"
                                    data-ms-clickable="true"
                                    data-ms='{"creative":"click_external-link","creative_detail":"meta-verified-for-business_hero"}'
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    id="u_0_s_G2"
                                    style={{ color: "#0064E0" }}
                                    aria-label="Meta Verified for businesses (opens in new tab)"
                                >
                                    Meta Verified for businesses
                                </a>
                            </p>
                        </div>
                        <div className="_a5gf _a5gl _a5i7 _a5jn">
                            <p className="_a92o _am_g _a5w7">
                                <i>​​Features, availability and pricing may vary by region.</i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="_a6-4" />
                <div className="_anjo _anjr" aria-label="Play" id="u_0_t_4/">
                    <svg
                        width="100%"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g opacity="0.5">
                            <path
                                d="M63 32C63 49.1208 49.1208 63 32 63C14.8792 63 1 49.1208 1 32C1 14.8792 14.8792 1 32 1C49.1208 1 63 14.8792 63 32Z"
                                fill="#1C2B33"
                                stroke="white"
                                strokeWidth={2}
                            />
                        </g>
                        <g clipPath="url(#clip0_2116_15052)">
                            <mask
                                id="mask0_2116_15052"
                                style={{ maskType: "luminance" }}
                                maskUnits="userSpaceOnUse"
                                x={19}
                                y={18}
                                width={30}
                                height={29}
                            >
                                <path d="M48.4361 18H19.9961V46.44H48.4361V18Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_2116_15052)">
                                <path
                                    d="M43.1073 29.1412C45.4773 30.5095 45.4773 33.9303 43.1073 35.2986L28.8873 43.5085C26.5173 44.8769 23.5548 43.1666 23.5548 40.4299L23.5548 24.01C23.5548 21.2734 26.5173 19.563 28.8873 20.9313L43.1073 29.1412Z"
                                    fill="white"
                                />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_2116_15052">
                                <rect
                                    width="28.44"
                                    height="28.44"
                                    fill="white"
                                    transform="translate(20 18)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="_anjq _anjr" aria-label="Pause" id="u_0_u_dX">
                    <svg
                        width="100%"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g opacity="0.5">
                            <path
                                d="M63 32C63 49.1208 49.1208 63 32 63C14.8792 63 1 49.1208 1 32C1 14.8792 14.8792 1 32 1C49.1208 1 63 14.8792 63 32Z"
                                fill="#1C2B33"
                                stroke="white"
                                strokeWidth={2}
                            />
                        </g>
                        <path
                            d="M26.2954 22.7393C25.6409 22.7393 25.1104 23.2698 25.1104 23.9242V40.5143C25.1104 41.1688 25.6409 41.6992 26.2954 41.6992H29.6133C30.2678 41.6992 30.7984 41.1688 30.7984 40.5143V23.9242C30.7984 23.2698 30.2678 22.7393 29.6133 22.7393H26.2954Z"
                            fill="white"
                        />
                        <path
                            d="M34.8286 22.7393C34.1741 22.7393 33.6436 23.2698 33.6436 23.9242V40.5143C33.6436 41.1688 34.1741 41.6992 34.8286 41.6992H38.1465C38.801 41.6992 39.3316 41.1688 39.3316 40.5143V23.9242C39.3316 23.2698 38.801 22.7393 38.1465 22.7393H34.8286Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
        </div>

    )
}
