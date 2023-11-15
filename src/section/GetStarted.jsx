import React, { useEffect, useState } from 'react'

export default function GetStarted() {
    window.addEventListener('resize', checkResize);
    const [mobile, setMobile] = useState(1)
    function checkResize() {
        // console.log("startted", window.innerWidth)
        if (window.innerWidth <= 480) {
            setMobile(1)
        } else if (window.innerWidth <= 1024) {
            setMobile(2)
        }
        else {
            setMobile(3)
        }
    }
    useEffect(()=>{
        if (window.innerWidth <= 480) {
            setMobile(1)
        } else if (window.innerWidth <= 1024) {
            setMobile(2)
        }
        else {
            setMobile(3)
        }
    },[])
    return (
        <div className="_a5x4">
            <div className="_a5gf _a5gp _a5i9 _a5jm" />
            <div className="_a5fu _a9w7 _a5x3">
                <div className="_a5eb _allk _a5ec _a5ee _a5eh _a5ep _a5er _a5fv">
                    <div className="_a5eb _allk _a5ec _a5ee _a5eh _a5ep _a5er _a5d5 _a5dc _a5du _a5e4">
                        <p className="_a92o _amqv _a5wf _a5ct">Get Started</p>
                    </div>
                    <div className="_a5eb _allk _a5ec _a5ee _a5eh _a5ep _a5er _a5d5 _a5dd _a5dt _a5e4">
                        <p className="_a92o _am_d _a5wf _a5ct">
                            Meta Verified for creators is currently available for people 18 years
                            or older.
                            <br />
                            See the{" "}
                            <a
                                className="_a6eh _a6rw _a6ee _a6el"
                                href="#faq"
                                data-ms-clickable="true"
                                data-ms='{"creative":"click_anchor","creative_detail":"faq"}'
                                target="_self"
                                style={{ color: "#0064E0" }}
                            >
                                FAQ section
                            </a>{" "}
                            for pricing and eligibility details.
                        </p>
                        <p className="_a92o _am_d _a5wf">
                            <b>Subscribe now to become Meta Verified on </b>
                            <a
                                className="_a6eh _a6rw _a6ee _a6el"
                                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Facredirect%2F%3Fdeeplink_destination%3Dupgrade_account%26entrypoint%3Dmeta_site&h=AT036dzSRDkOTOlgpa7DPfk3fC90FPhyodqYke77kCFViicXTSioPwJAVLRTx2FpYlDM3jmCJixfsIg1tqxpJPLU_rMy57I_3nFIZlxhbcGhMevIUuP8443-01TCgvRqMasNfGUFgaWiPnlKOlCwDXOLJMmzFXam7YfguO6_PiE"
                                data-ms-clickable="true"
                                data-ms='{"creative":"click_external-link","creative_detail":"get-started_instagram"}'
                                target="_blank"
                                rel="noreferrer noopener nofollow"
                                data-lynx-mode="asynclazy"
                                id="u_0_v_OK"
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
                                data-ms='{"creative":"click_external-link","creative_detail":"get-started_facebook"}'
                                target="_blank"
                                rel="noreferrer noopener"
                                id="u_0_w_LR"
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
            <div className="_a5gf _a5gp _a5i9 _a5jm" />
            <div className="_a72i _a72k">
                <div className="_a727">
                    <span />
                </div>
                {mobile == 1 &&
                    <div className="_aodq">
                        <div className="_aodp">
                            <div className="_a99r _9iv-">
                                <div className="_a6h7">
                                    <div
                                        className="_a5n5 _al42 _al8o _am_h _am_j"
                                        style={{ borderRadius: 24 }}
                                    >
                                        <div className="_8h4z _8h4- _a4zf">
                                            <img
                                                className="_8h4i _21op _8h4d _8h56 img"
                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/-PAXP-deijE.gif"
                                                alt="Verification on different platforms"
                                                id="u_0_2z_kk"
                                                style={{
                                                    boxSizing: "border-box",
                                                    backgroundImage:
                                                        "url(../../public/metave.jpg)"
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="_a6h8" style={{}}>
                                    <p className="_a92o _am_c _a5w7 _a5ct">Select a profile</p>
                                    <p className="_a92o _am_d _a5w7 _a5ct">
                                        Go to ‘Settings’ on Instagram or Facebook. Click ‘Accounts Center’,
                                        then ‘Meta Verified’. If it’s available for your account, you will see
                                        <b> ‘</b>Meta Verified available’ under your name and profile photo.
                                    </p>
                                    <div className="_a6h9" />
                                    <div className="_afa_" />
                                </div>
                            </div>
                        </div>
                        <div className="_aodp">
                            <div className="_a99r _9iv-">
                                <div className="_a6h7">
                                    <div
                                        className="_a5n5 _al42 _al8o _am_h _am_j"
                                        style={{ borderRadius: 24 }}
                                    >
                                        <div className="_8h4z _8h4- _a4zf">
                                            <img
                                                className="_8h4i _21op _8h4d _8h56 img"
                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/-PAXP-deijE.gif"
                                                alt="Payment Page"
                                                id="u_0_2x_mJ"
                                                style={{
                                                    boxSizing: "border-box",
                                                    backgroundImage:
                                                    "url(../../public/setup.jpg)"
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="_a6h8" style={{}}>
                                    <p className="_a92o _am_c _a5w7 _a5ct">Set up payment</p>
                                    <p className="_a92o _am_d _a5w7 _a5ct">
                                        Select your preferred payment method for your monthly payment.
                                    </p>
                                    <div className="_a6h9" />
                                    <div className="_afa_" />
                                </div>
                            </div>
                        </div>
                        <div className="_aodp">
                            <div className="_a99r _9iv-">
                                <div className="_a6h7">
                                    <div
                                        className="_a5n5 _al42 _al8o _am_h _am_j"
                                        style={{ borderRadius: 24 }}
                                    >
                                        <div className="_8h4z _8h4- _a4zf">
                                            <img
                                                className="_8h4i _21op _8h4d _8h56 img"
                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/-PAXP-deijE.gif"
                                                alt="Proof of ID"
                                                id="u_0_2y_Ja"
                                                style={{
                                                    boxSizing: "border-box",
                                                    backgroundImage:
                                                    "url(../../public/take.jpg)"                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="_a6h8" style={{}}>
                                    <p className="_a92o _am_c _a5w7 _a5ct">Verify identity</p>
                                    <p className="_a92o _am_d _a5w7 _a5ct">
                                        Complete the verification process that requires a government ID and,
                                        in select regions, a selfie video to confirm your identity before
                                        being approved for a Meta Verified subscription.
                                    </p>
                                    <div className="_a6h9" />
                                    <div className="_afa_" />
                                </div>
                            </div>
                        </div>
                    </div>
                }


                {mobile == 2 &&
                    <div
                        aria-label="Slideshow"
                        aria-roledescription="carousel"
                        className="_90lg"
                        role="group"
                    >
                        <div className="_a72h _a9sh">
                            <p>
                                <span />
                            </p>
                            <p className="_a729 _a5c-" style={{ color: "inherit" }}>
                                1 / 3
                            </p>
                        </div>
                        <div className="_a72a _al8m">
                            <div
                                aria-live="off"
                                className="_90lh"
                                id="js_1x8"
                                style={{ minHeight: 620, height: "593.375px" }}
                            >
                                <div className="_a72g _8h4d _a9sg">
                                    <div className="_a99r _9iv-">
                                        <div className="_a6h7">
                                            <div
                                                className="_a5n5 _al42 _al8o _am_h _am_j"
                                                style={{ borderRadius: 24 }}
                                            >
                                                <div className="_8h4z _8h4- _a4zf">
                                                    <img
                                                        className="_8h4i _21op _8h4d _8h56 img"
                                                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/-PAXP-deijE.gif"
                                                        alt="Verification on different platforms"
                                                        id="u_0_2z_kk"
                                                        style={{
                                                            boxSizing: "border-box",
                                                            backgroundImage:
                                                            "url(../../public/metave.jpg)"                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="_a6h8" style={{}}>
                                            <p className="_a92o _am_c _a5w7 _a5ct">Select a profile</p>
                                            <p className="_a92o _am_d _a5w7 _a5ct">
                                                Go to ‘Settings’ on Instagram or Facebook. Click ‘Accounts
                                                Center’, then ‘Meta Verified’. If it’s available for your account,
                                                you will see<b> ‘</b>Meta Verified available’ under your name and
                                                profile photo.
                                            </p>
                                            <div className="_a6h9" />
                                            <div className="_afa_" />
                                        </div>
                                    </div>
                                </div>
                                <div className="_a72g _8h4d _a9sg">
                                    <div className="_a99r _9iv-">
                                        <div className="_a6h7">
                                            <div
                                                className="_a5n5 _al42 _al8o _am_h _am_j"
                                                style={{ borderRadius: 24 }}
                                            >
                                                <div className="_8h4z _8h4- _a4zf">
                                                    <img
                                                        className="_8h4i _21op _8h4d _8h56 img"
                                                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/-PAXP-deijE.gif"
                                                        alt="Payment Page"
                                                        id="u_0_2x_mJ"
                                                        style={{
                                                            boxSizing: "border-box",
                                                            backgroundImage:
                                                            "url(../../public/setup.jpg)"                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="_a6h8" style={{}}>
                                            <p className="_a92o _am_c _a5w7 _a5ct">Set up payment</p>
                                            <p className="_a92o _am_d _a5w7 _a5ct">
                                                Select your preferred payment method for your monthly payment.
                                            </p>
                                            <div className="_a6h9" />
                                            <div className="_afa_" />
                                        </div>
                                    </div>
                                </div>
                                <div className="_a72g _8h4d _a9sg">
                                    <div className="_a99r _9iv-">
                                        <div className="_a6h7">
                                            <div
                                                className="_a5n5 _al42 _al8o _am_h _am_j"
                                                style={{ borderRadius: 24 }}
                                            >
                                                <div className="_8h4z _8h4- _a4zf">
                                                    <img
                                                        className="_8h4i _21op _8h4d _8h56 img"
                                                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/-PAXP-deijE.gif"
                                                        alt="Proof of ID"
                                                        id="u_0_2y_Ja"
                                                        style={{
                                                            boxSizing: "border-box",
                                                            backgroundImage:
                                                            "url(../../public/take.jpg)"                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="_a6h8" style={{}}>
                                            <p className="_a92o _am_c _a5w7 _a5ct">Verify identity</p>
                                            <p className="_a92o _am_d _a5w7 _a5ct">
                                                Complete the verification process that requires a government ID
                                                and, in select regions, a selfie video to confirm your identity
                                                before being approved for a Meta Verified subscription.
                                            </p>
                                            <div className="_a6h9" />
                                            <div className="_afa_" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                }

                {mobile == 3 &&
                    <div
                        aria-label="Slideshow"
                        aria-roledescription="carousel"
                        className="_90lg"
                        role="group"
                    >
                        <div className="_a728">
                            <div
                                aria-live="off"
                                className="_90lh"
                                id="js_j7"
                                style={{ minHeight: 600, height: "666.531px" }}
                            >
                                <div
                                    aria-live="assertive"
                                    aria-roledescription="slide"
                                    className="_90lj"
                                    id="js_j8"
                                    role="presentation"
                                    tabIndex={0}
                                    style={{
                                        width: "33.3333%",
                                        transform: "translateX(0%)",
                                        transition:
                                            "opacity 300ms ease 0s, transform 300ms ease 0s, visibility 300ms ease 0s",
                                        opacity: 1,
                                        visibility: "inherit"
                                    }}
                                >
                                    <div className="_8h4d">
                                        <span className="_1-qs _8h4d">
                                            <div className="_a99r _9iv-">
                                                <div className="_a6h7">
                                                    <div
                                                        className="_a5n5 _al42 _al8o _am_h _am_j"
                                                        style={{ borderRadius: 24 }}
                                                    >
                                                        <div className="_8h4z _8h4- _a4zf">
                                                            <img
                                                                className="_8h4i _21op _8h4d _8h56 img"
                                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/-PAXP-deijE.gif"
                                                                alt="Verification on different platforms"
                                                                id="u_0_2w_u3"
                                                                style={{
                                                                    boxSizing: "border-box",
                                                                    backgroundImage:
                                                                    "url(../../public/metave.jpg)"                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="_a6h8" style={{}}>
                                                    <p className="_a92o _am_c _a5w7 _a5ct">Select a profile</p>
                                                    <p className="_a92o _am_d _a5w7 _a5ct">
                                                        Go to ‘Settings’ on Instagram or Facebook. Click ‘Accounts
                                                        Center’, then ‘Meta Verified’. If it’s available for your
                                                        account, you will see<b> ‘</b>Meta Verified available’
                                                        under your name and profile photo.
                                                    </p>
                                                    <div className="_a6h9" />
                                                    <div className="_afa_" />
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div
                                    aria-label="2 of 3"
                                    aria-live="off"
                                    aria-roledescription="slide"
                                    className="_90lj"
                                    id="js_j9"
                                    role="group"
                                    tabIndex={-1}
                                    style={{
                                        width: "33.3333%",
                                        transform: "translateX(100%)",
                                        transition:
                                            "opacity 300ms ease 0s, transform 300ms ease 0s, visibility 300ms ease 0s",
                                        opacity: 1,
                                        visibility: "inherit"
                                    }}
                                >
                                    <div className="_8h4d">
                                        <span className="_1-qs _8h4d">
                                            <div className="_a99r _9iv-">
                                                <div className="_a6h7">
                                                    <div
                                                        className="_a5n5 _al42 _al8o _am_h _am_j"
                                                        style={{ borderRadius: 24 }}
                                                    >
                                                        <div className="_8h4z _8h4- _a4zf">
                                                            <img
                                                                className="_8h4i _21op _8h4d _8h56 img"
                                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/-PAXP-deijE.gif"
                                                                alt="Payment Page"
                                                                id="u_0_2x_30"
                                                                style={{
                                                                    boxSizing: "border-box",
                                                                    backgroundImage:
                                                                    "url(../../public/setup.jpg)"                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="_a6h8" style={{}}>
                                                    <p className="_a92o _am_c _a5w7 _a5ct">Set up payment</p>
                                                    <p className="_a92o _am_d _a5w7 _a5ct">
                                                        Select your preferred payment method for your monthly
                                                        payment.
                                                    </p>
                                                    <div className="_a6h9" />
                                                    <div className="_afa_" />
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div
                                    aria-label="3 of 3"
                                    aria-live="off"
                                    aria-roledescription="slide"
                                    className="_90lj"
                                    id="js_ja"
                                    role="group"
                                    tabIndex={-1}
                                    style={{
                                        width: "33.3333%",
                                        transform: "translateX(200%)",
                                        transition:
                                            "opacity 300ms ease 0s, transform 300ms ease 0s, visibility 300ms ease 0s",
                                        opacity: 1,
                                        visibility: "inherit"
                                    }}
                                >
                                    <div className="_8h4d">
                                        <span className="_1-qs _8h4d">
                                            <div className="_a99r _9iv-">
                                                <div className="_a6h7">
                                                    <div
                                                        className="_a5n5 _al42 _al8o _am_h _am_j"
                                                        style={{ borderRadius: 24 }}
                                                    >
                                                        <div className="_8h4z _8h4- _a4zf">
                                                            <img
                                                                className="_8h4i _21op _8h4d _8h56 img"
                                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/-PAXP-deijE.gif"
                                                                alt="Proof of ID"
                                                                id="u_0_2y_Mb"
                                                                style={{
                                                                    boxSizing: "border-box",
                                                                    backgroundImage:
                                                                    "url(../../public/take.jpg)"                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="_a6h8" style={{}}>
                                                    <p className="_a92o _am_c _a5w7 _a5ct">Verify identity</p>
                                                    <p className="_a92o _am_d _a5w7 _a5ct">
                                                        Complete the verification process that requires a
                                                        government ID and, in select regions, a selfie video to
                                                        confirm your identity before being approved for a Meta
                                                        Verified subscription.
                                                    </p>
                                                    <div className="_a6h9" />
                                                    <div className="_afa_" />
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                }

                {/* react-mount-point-unstable */}
            </div>
            <div className="_a5gf _a5gp _a5i9 _a5jm" />
        </div>

    )
}
