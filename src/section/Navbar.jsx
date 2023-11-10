import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [toggle, setToggle] = useState(false)
    const [isWho, setIsWho] = useState(false)
    const [isTech, setIsTech] = useState(false)
    const [isMeta, setMeta] = useState(false)
    const [isSupport, setSupport] = useState(false)
    const [isSupportShop, setSupportShop] = useState(false)
    const [isSupportApp, setSupportApp] = useState(false)
    const [isSupportBuild, setSupportBuild] = useState(false)

    const [isHeaderOpen, setHeaderOpen] = useState(false)
    const [isHeaderWho, setHeaderWho] = useState(false)
    const [isHeaderOur, setHeaderOur] = useState(false)
    const [isHeaderMeta, setHeaderMeta] = useState(false)
    const [isHeaderSupport, setHeaderSupport] = useState(false)
    const changeMenu = (index) => {
        if (index == 1) {
            setHeaderWho(pre => {
                setHeaderOpen(pre ? false : true)
                return !pre
            })
            setHeaderOur(false)
            setHeaderMeta(false)
            setHeaderSupport(false)
        } else if (index == 2) {
            setHeaderWho(false)
            setHeaderOur(pre => {
                setHeaderOpen(pre ? false : true)
                return !pre
            })
            setHeaderMeta(false)
            setHeaderSupport(false)
        } else if (index == 3) {
            setHeaderWho(false)
            setHeaderOur(false)
            setHeaderMeta(pre => {
                setHeaderOpen(pre ? false : true)
                return !pre
            })
            setHeaderSupport(false)
        } else if (index == 4) {
            setHeaderWho(false)
            setHeaderOur(false)
            setHeaderMeta(false)
            setHeaderSupport(pre => {
                setHeaderOpen(pre ? false : true)
                return !pre
            })
        } else {
            setHeaderWho(false)
            setHeaderOur(false)
            setHeaderMeta(false)
            setHeaderSupport(false)
            setHeaderOpen(false)
        }
    }

    useEffect(() => {

    }, [isHeaderOpen])

    return (
        <div className="" id="aboutMetaNavUnified">
            <nav className="_afcq _afcw" style={{ marginTop: 0 }}>
                {toggle ?
                    <>
                        <div
                            tabIndex={-1}
                            aria-hidden="true"
                            className="_afdm"
                            role="button"
                            style={{ marginTop: 0 }}
                        />
                        <nav className="_afcq _afcw" style={{}}>
                            <div
                                tabIndex={-1}
                                aria-hidden="true"
                                className="_afdm"
                                role="button"
                                style={{ marginTop: 0 }}
                            />
                            <div className="_afdz _afe3">
                                <div className="_afe4">
                                    <a
                                        aria-label="Main menu"
                                        className="_afcs _afgf _afdo"
                                        data-ga-category="c10"
                                        data-ms='{"creative":"button","creative_detail":"about_nav-bar_close-button"}'
                                        role="button"
                                        title="Close submenu"
                                        target="_self"
                                        href="#"
                                        onClick={() => setToggle(pre => !pre)}
                                    >
                                        <span className="_afec _afeg">
                                            <span className="_afed" />
                                            <span className="_afee" />
                                            <span className="_afef" />
                                        </span>
                                    </a>
                                    <a
                                        aria-label="Go up one level"
                                        className="_afcs _afgg"
                                        data-ga-category="c10"
                                        data-ms='{"creative":"button","creative_detail":"about_nav-bar_back-button"}'
                                        role="button"
                                        target="_self"
                                        href="#"
                                        style={{ visibility: isSupport ? "visible" : "hidden" }}
                                        onClick={()=>setSupport(pre=>!pre)}
                                    >
                                        <svg
                                            className="_9d0l"
                                            width={19}
                                            height={14}
                                            role="img"
                                            viewBox="0 0 19 14"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                <g id="Icons/BackArrow" fill="currentColor" fillRule="nonzero">
                                                    <polygon points="6.96303297 13.9260659 1.77635684e-15 6.96303297 6.96303297 0 8.19393493 1.20674571 3.30843889 6.09265385 18.9286108 6.09265385 18.9286108 7.83341209 3.33211321 7.83341209 8.19393493 12.695164" />
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                                <a
                                    className="_afcs _afd1"
                                    data-ga-category="c10"
                                    data-ms='{"creative":"logo","creative_detail":"nav_meta-logo"}'
                                    target="_self"
                                    href="/"
                                >
                                    <img
                                        className="_afd2 img"
                                        src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=1&ccb=1-7&_nc_sid=e280be&_nc_ohc=Pnji0z9IPgIAX8ab95G&_nc_ht=scontent.fhan3-1.fna&oh=00_AfA5zc4gmB6KMWWmbNmjCZnHqUs5kmNxrAqVH-Pcdbf4eA&oe=6551AAB9"
                                        width={89}
                                        height={18}
                                        alt="Meta logo, back to home"
                                    />
                                </a>
                                <div className="_afe5">
                                    <div>
                                        <iframe
                                            height={34}
                                            width={34}
                                            name="nav_cart-link"
                                            className="_afdr _afdo"
                                        />
                                    </div>
                                    <a
                                        aria-label="Main menu"
                                        className="_afcs _afe6"
                                        data-ga-category="c10"
                                        data-ms='{"creative":"button","creative_detail":"about_nav-bar_close-button"}'
                                        role="button"
                                        title="Close submenu"
                                        target="_self"
                                        href="#"
                                        onClick={() => setToggle(pre => !pre)}
                                    >
                                        <span className="_afec _afeg">
                                            <span className="_afed" />
                                            <span className="_afee" />
                                            <span className="_afef" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <ul className="_afc_ _afd- _anvl _amrm">
                                <li className={`${isSupport ? "_afe0" : ""}`}>
                                    <ul className={`${isSupport ? "_afe1" : ""} _afd3 _anvq`}>
                                        <li className={`_ag6g _afcr ${isWho ? "_anvm" : ""} _aoi7`}>
                                            <a
                                                aria-controls={`${isWho ? "js_6xb" : "js_6ae"}`}
                                                aria-expanded="true"
                                                className="_afcs _afds"
                                                data-ga-category="c10"
                                                data-ms='{"creative":"click_menu","creative_detail":"nav_who-we-are"}'
                                                target="_self"
                                                href="#"
                                                onClick={() => setIsWho(pre => !pre)}
                                            >
                                                Who we are
                                                <span className="_afd6" />
                                            </a>
                                            <span className="_afe7 _afdz" />
                                            <ul
                                                className={`${isWho ? "_anvo" : ""} _anvn _afd7`}
                                                id="js_6af"
                                                role="listbox"
                                                aria-expanded="false"
                                            >
                                                <li className="_afdt _afdv">
                                                    <ul className="_afd9">
                                                        <li className="_afdc">
                                                            <p className="_anvp" />
                                                            <ul className="_afdd">
                                                                <li className="_afde _amc6">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_who-we-are_actions"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_about-us_actions"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="/actions/"
                                                                    >
                                                                        Our actions
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="_afdt _afdv">
                                                    <ul className="_afd9">
                                                        <li className="_afdc">
                                                            <p className="_anvp" />
                                                            <ul className="_afdd">
                                                                <li className="_afde _amc6">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_who-we-are_actions"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_who-we-are_actions"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="/media-gallery/executives/"
                                                                    >
                                                                        Our executives
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="_afdt _afdv">
                                                    <ul className="_afd9">
                                                        <li className="_afdc">
                                                            <p className="_anvp" />
                                                            <ul className="_afdd">
                                                                <li className="_afde _amc6">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs _afdf"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_who-we-are_learn"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_who-we-are_learn"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="/company-info/"
                                                                    >
                                                                        Learn about who we are
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={`_ag6g _afcr ${isTech ? "_anvm" : ""} _aoi7`}>
                                            <a
                                                aria-controls="js_6ag"
                                                aria-expanded="true"
                                                className="_afcs _afds"
                                                data-ga-category="c10"
                                                data-ms='{"creative":"click_menu","creative_detail":"nav_technologies"}'
                                                target="_self"
                                                href="#"
                                                onClick={() => setIsTech(pre => !pre)}
                                            >
                                                Our technologies
                                                <span className="_afd6" />
                                            </a>
                                            <span className="_afe7 _afdz" />
                                            <ul
                                                className={`${isTech ? "_anvo" : ""} _anvn _afd7`}
                                                id="js_6ah"
                                                role="listbox"
                                                aria-expanded="false"
                                            >
                                                <li className="_afdt _affw">
                                                    <ul className="_afd9">
                                                        <li className="_afdc">
                                                            <p className="_anvp">Shop devices</p>
                                                            <ul className="_afdd _afea">
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_tech_quest"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_tech_quest"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="https://www.meta.com/quest/?utm_content=53191&utm_term=verify%20facebook%20page"
                                                                    >
                                                                        Meta Quest
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_tech_ray-ban"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_tech_ray-ban"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="https://www.meta.com/smart-glasses/?utm_content=60956&utm_term=verify%20facebook%20page"
                                                                    >
                                                                        Ray-Ban | Meta
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="_afdt _affw">
                                                    <ul className="_afd9">
                                                        <li className="_afdc">
                                                            <p className="_anvp">Explore apps</p>
                                                            <ul className="_afdd _afea">
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_tech_facebook"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_tech_facebook"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="/technologies/facebook-app/"
                                                                    >
                                                                        Facebook
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_tech_messenger"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_tech_messenger"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="/technologies/messenger/"
                                                                    >
                                                                        Messenger
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_tech_instagram"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_tech_instagram"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="/technologies/instagram/"
                                                                    >
                                                                        Instagram
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_tech_whats-app"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_tech_whats-app"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="/technologies/whatsapp/"
                                                                    >
                                                                        WhatsApp
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_tech_horizon"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_tech_horizon"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="https://www.oculus.com/horizon-worlds/?utm_content=77361"
                                                                    >
                                                                        Meta Horizon
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="_afdt _affw">
                                                    <ul className="_afd9">
                                                        <li className="_afdc">
                                                            <p className="_anvp">Explore work tools</p>
                                                            <ul className="_afdd _afea">
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_tech_work-tools-overview"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_tech_work-tools-overview"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="https://forwork.meta.com/?utm_content=39727"
                                                                    >
                                                                        Work products overview
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_tech_vr-headsets"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_tech_vr-headsets"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="https://forwork.meta.com/quest/quest-pro/?utm_content=71891"
                                                                    >
                                                                        Virtual reality headsets
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_tech_meta-horizon-workrooms"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_tech_meta-horizon-workrooms"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="https://forwork.meta.com/horizon-workrooms/?utm_content=95648"
                                                                    >
                                                                        Meta Horizon Workrooms
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_tech_workplace"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_tech_workplace"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="https://forwork.meta.com/meta-workplace/?utm_content=74049"
                                                                    >
                                                                        Workplace
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="_afdt _afdv">
                                                    <ul className="_afd9">
                                                        <li className="_afdc">
                                                            <p className="_anvp" />
                                                            <ul className="_afdd">
                                                                <li className="_afde _amc6">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs _afdf"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_tech_learn"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_tech_learn"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="/technologies/"
                                                                    >
                                                                        Learn about all technologies
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="_afcr">
                                            <a
                                                className="_afcs"
                                                data-ga-category="c10"
                                                data-ga-label="nav_the-metaverse"
                                                data-ms='{"creative":"click_menu","creative_detail":"nav_the-metaverse"}'
                                                target="_self"
                                                href="/metaverse/"
                                            >
                                                The metaverse
                                                <span className="_afct _afcu" />
                                            </a>
                                        </li>
                                        <li className={`_ag6g _afcr ${isMeta ? "_anvm" : ""} _aoi7`}>
                                            <a
                                                aria-controls="js_6ai"
                                                aria-expanded="true"
                                                className="_afcs _afds"
                                                data-ga-category="c10"
                                                data-ms='{"creative":"click_menu","creative_detail":"nav_meta-and-you"}'
                                                target="_self"
                                                href="#"
                                                onClick={() => setMeta(pre => !pre)}
                                            >
                                                Meta and you
                                                <span className="_afd6" />
                                            </a>
                                            <span className="_afe7 _afdz" />
                                            <ul
                                                className={`${isMeta ? "_anvo" : ""} _anvn _afd7`}
                                                id="js_6aj"
                                                role="listbox"
                                                aria-expanded="false"
                                            >
                                                <li className="_afdt _afdv">
                                                    <ul className="_afd9">
                                                        <li className="_afdc">
                                                            <p className="_anvp" />
                                                            <ul className="_afdd">
                                                                <li className="_afde _amc6">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_meta-and-you_iyw"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_meta-and-you_iyw"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="/meta-and-you/its-your-world/"
                                                                    >
                                                                        It's Your World
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="_afdt _afdv">
                                                    <ul className="_afd9">
                                                        <li className="_afdc">
                                                            <p className="_anvp" />
                                                            <ul className="_afdd">
                                                                <li className="_afde _amc6">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs _afdf"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_meta-and-you_community"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_meta-and-you_community"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="/community/"
                                                                    >
                                                                        Learn about our community
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`${isSupport ? "_afe0" : ""}`}>
                                    <ul className={`_afd4 ${isSupport ? "_afe1" : ""}`}>
                                        <li className="_afcr">
                                            <a
                                                className="_afcs"
                                                data-ga-category="c10"
                                                data-ga-label="nav_shop-meta"
                                                data-ms='{"creative":"click_menu","creative_detail":"nav_shop-meta"}'
                                                target="_self"
                                                href="https://www.meta.com/?utm_content=31202&utm_term=verify%20facebook%20page"
                                            >
                                                Shop Meta
                                                <span className="_afct _afcu" />
                                            </a>
                                        </li>
                                        <li className="_afcr">
                                            <a
                                                className="_afcs"
                                                data-ga-category="c10"
                                                data-ga-label="nav_news"
                                                data-ms='{"creative":"click_menu","creative_detail":"nav_news"}'
                                                target="_self"
                                                href="https://about.fb.com/news/"
                                            >
                                                News
                                                <span className="_afct _afcu" />
                                            </a>
                                        </li>
                                        <li className="_afcr _afe2 _ag6g">
                                            <a
                                                aria-controls="nav-menu-section-js_3"
                                                aria-expanded="false"
                                                className="_afcs _afds"
                                                data-ga-category="c10"
                                                data-ms='{"creative":"click_menu","creative_detail":"nav_support"}'
                                                target="_self"
                                                href="#"
                                                onClick={() => setSupport(pre => !pre)}
                                            >
                                                Support
                                                <span className="_afd6" />
                                                <span className="_afct _afcu" />
                                            </a>
                                            <span className="_afe7 _afdz" />
                                            <ul
                                                className={`_afd7 ${isSupport ? "_afd8" : ""}`}
                                                id="nav-menu-section-js_3"
                                                role="listbox"
                                                aria-expanded="false"
                                            >
                                                <li className="_afe8 _afdz">
                                                    <span className="_afds">Support</span>
                                                </li>
                                                <li className=" _afdt _affw">
                                                    <ul className="_afd9">
                                                        <li className="_afdc">
                                                            <div className={`_afd5 ${isSupportShop ? "_afe9" : ""}`} onClick={() => setSupportShop(pre => !pre)} tabIndex={0} role="button">
                                                                Shop Help Center
                                                                <span className="_afd6 _afdz" />
                                                            </div>
                                                            <ul className={`_afdd _afea ${isSupportShop ? "_afe9" : ""}`}>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_support_store-help-center_product-support-home"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_support_store-help-center_product-support-home"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="https://www.meta.com/help/?utm_content=97131&utm_term=verify%20facebook%20page"
                                                                    >
                                                                        Product support home
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_support_store-help-center_find-order"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_support_store-help-center_find-order"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="https://www.meta.com/order/find/?utm_content=64883&utm_term=verify%20facebook%20page"
                                                                    >
                                                                        Find order
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_support_store-help-center_meta-quest"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_support_store-help-center_meta-quest"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="https://www.meta.com/help/quest/?utm_content=84486&utm_term=verify%20facebook%20page"
                                                                    >
                                                                        Meta Quest
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_support_store-help-center_meta-portal"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_support_store-help-center_meta-portal"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="https://www.meta.com/help/portal/?utm_content=69544&utm_term=verify%20facebook%20page"
                                                                    >
                                                                        Meta Portal
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_support_store-help-center_ray-ban"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_support_store-help-center_ray-ban"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="https://www.meta.com/help/ray-ban-stories/?utm_content=34638&utm_term=verify%20facebook%20page"
                                                                    >
                                                                        Ray-Ban Stories
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className=" _afdt _affw">
                                                    <ul className="_afd9">
                                                        <li className="_afdc">
                                                            <div className={`_afd5 ${isSupportApp ? "_afe9" : ""}`} onClick={() => setSupportApp(pre => !pre)} tabIndex={0} role="button">
                                                                App Help Center
                                                                <span className="_afd6 _afdz" />
                                                            </div>
                                                            <ul className={`_afdd _afea ${isSupportApp ? "_afe9" : ""}`}>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_support_app-help-center_facebook"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_support_app-help-center_facebook"}'
                                                                        tabIndex={-1}
                                                                        target="_blank"
                                                                        href="https://www.facebook.com/help?ref=about.meta.com"
                                                                    >
                                                                        Facebook
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_support_app-help-center_messenger"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_support_app-help-center_messenger"}'
                                                                        tabIndex={-1}
                                                                        target="_blank"
                                                                        href="https://www.facebook.com/help/messenger-app/?ref=about.meta.com"
                                                                    >
                                                                        Messenger
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_support_app-help-center_instagram"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_support_app-help-center_instagram"}'
                                                                        tabIndex={-1}
                                                                        target="_blank"
                                                                        href="https://help.instagram.com/?fbclid=IwAR0eOKAhIz4VCjj3Nk9d7YDG6uePVY7K3GSxi7yTaS829no9e16Rtzwnin4"
                                                                    >
                                                                        Instagram
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_support_app-help-center_whatsapp"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_support_app-help-center_whatsapp"}'
                                                                        tabIndex={-1}
                                                                        target="_blank"
                                                                        href="https://faq.whatsapp.com/?fbclid=IwAR2q8S17mg87QsNG6flzd8_jVwapuTq-12NEfDNKbe0Rj9Cfoads-QFfsnw"
                                                                    >
                                                                        WhatsApp
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_support_app-help-center_meta-horizon"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_support_app-help-center_meta-horizon"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="https://www.meta.com/help/quest/landing/horizon/?utm_content=25701&utm_term=verify%20facebook%20page"
                                                                    >
                                                                        Meta Horizon
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_support_app-help-center_workplace"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_support_app-help-center_workplace"}'
                                                                        tabIndex={-1}
                                                                        target="_blank"
                                                                        href="https://www.facebook.com/help/work?ref=about.meta.com"
                                                                    >
                                                                        Workplace
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className=" _afdt _affw">
                                                    <ul className="_afd9 _amc4">
                                                        <li className="_afdc">
                                                            <div className={`_afd5 ${isSupportBuild ? "_afe9" : ""}`} onClick={() => setSupportBuild(pre => !pre)} tabIndex={0} role="button">
                                                                Build with us
                                                                <span className="_afd6 _afdz" />
                                                            </div>
                                                            <ul className={`_afdd _afea ${isSupportBuild ? "_afe9" : ""}`}>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_support-build-with-us_businesses"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_support-build-with-us_businesses"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="https://www.facebook.com/business/"
                                                                    >
                                                                        Businesses
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_support-build-with-us_creators"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_support-build-with-us_creators"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="https://www.facebook.com/creators/"
                                                                    >
                                                                        Creators
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_support-build-with-us_developers"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_support-build-with-us_developers"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="https://developers.facebook.com/"
                                                                    >
                                                                        Developers
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_support-build-with-us_careers"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_support-build-with-us_careers"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="https://www.metacareers.com/"
                                                                    >
                                                                        Careers
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_support-build-with-us_investors"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_support-build-with-us_investors"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="https://investor.fb.com/home/default.aspx"
                                                                    >
                                                                        Investors
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_support-build-with-us_media"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_support-build-with-us_media"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="https://www.facebook.com/formedia"
                                                                    >
                                                                        Media
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_support_researchers"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_support_researchers"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="https://research.facebook.com/"
                                                                    >
                                                                        Researchers
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_support_engineers"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_support_engineers"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="https://engineering.fb.com/"
                                                                    >
                                                                        Engineers
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_support_government"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_support_government"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="https://www.facebook.com/gpa/"
                                                                    >
                                                                        Government, Politics &amp; Advocacy
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_support_nonprofits"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_support_nonprofits"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="https://socialimpact.facebook.com/"
                                                                    >
                                                                        Nonprofits
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                                <li className="_afde">
                                                                    <a
                                                                        aria-hidden="true"
                                                                        className="_afcs"
                                                                        data-ga-category="c10"
                                                                        data-ga-label="nav_support_educators"
                                                                        data-ms='{"creative":"click_menu","creative_detail":"nav_support_educators"}'
                                                                        tabIndex={-1}
                                                                        target="_self"
                                                                        href="https://education.facebook.com/"
                                                                    >
                                                                        Educators
                                                                        <span className="_afct _afcu" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </>
                    :

                    <div className="_afdz _afe3">
                        <div className="_afe4">
                            <a
                                aria-label="Main menu"
                                className="_afcs _afgf"
                                data-ga-category="c10"
                                data-ms='{"creative":"button","creative_detail":"about_nav-bar_hamburger-button"}'
                                role="button"
                                title="Main menu"
                                target="_self"
                                href="#"
                                onClick={() => setToggle(pre => !pre)}
                            >
                                <span className="_afec">
                                    <span className="_afed" />
                                    <span className="_afee" />
                                    <span className="_afef" />
                                </span>
                            </a>
                            <a
                                aria-label="Go up one level"
                                className="_afcs _afgg _afdo"
                                data-ga-category="c10"
                                data-ms='{"creative":"button","creative_detail":"about_nav-bar_back-button"}'
                                role="button"
                                target="_self"
                                href="#"
                                style={{ visibility: "hidden" }}
                            >
                                <svg
                                    className="_9d0l"
                                    width={19}
                                    height={14}
                                    role="img"
                                    viewBox="0 0 19 14"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <g id="Icons/BackArrow" fill="currentColor" fillRule="nonzero">
                                            <polygon points="6.96303297 13.9260659 1.77635684e-15 6.96303297 6.96303297 0 8.19393493 1.20674571 3.30843889 6.09265385 18.9286108 6.09265385 18.9286108 7.83341209 3.33211321 7.83341209 8.19393493 12.695164" />
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </div>
                        <a
                            className="_afcs _afd1"
                            data-ga-category="c10"
                            data-ms='{"creative":"logo","creative_detail":"nav_meta-logo"}'
                            target="_self"
                            href="/"
                        >
                            <img
                                className="_afd2 img"
                                src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=1&ccb=1-7&_nc_sid=e280be&_nc_ohc=Pnji0z9IPgIAX-CxL-o&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBiFHmBhsBW_wj9V2AjyMDQERlIvT0seEJMuGpiUSqbSg&oe=6551AAB9"
                                width={89}
                                height={18}
                                alt="Meta logo, back to home"
                            />
                        </a>
                        <div className="_afe5">
                            <div>
                                <iframe
                                    height={34}
                                    width={34}
                                    name="nav_cart-link"
                                    className="_afdr"
                                />
                            </div>
                            <a
                                aria-label="Main menu"
                                className="_afcs _afe6 _afdo"
                                data-ga-category="c10"
                                data-ms='{"creative":"button","creative_detail":"about_nav-bar_hamburger-button"}'
                                role="button"
                                title="Main menu"
                                target="_self"
                                href="#"
                            >
                                <span className="_afec">
                                    <span className="_afed" />
                                    <span className="_afee" />
                                    <span className="_afef" />
                                </span>
                            </a>
                        </div>
                    </div>

                }
                {isHeaderOpen &&
                    <div
                        tabIndex={-1}
                        aria-hidden="true"
                        className="_afdm"
                        role="button"
                        style={{ marginTop: 0 }}
                        onClick={() => changeMenu(0)}
                    />

                }
                <ul className="_afc_ _amrm">
                    <li className="">
                        <ul className="_afd3 _afe1">
                            <li className="_afd0">
                                <a
                                    className="_afcs _afd1"
                                    data-ga-category="c10"
                                    data-ms='{"creative":"logo","creative_detail":"nav_meta-logo"}'
                                    target="_self"
                                    href="/"
                                >
                                    <img
                                        className="_afd2 img"
                                        src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=1&ccb=1-7&_nc_sid=e280be&_nc_ohc=Pnji0z9IPgIAX-CxL-o&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBiFHmBhsBW_wj9V2AjyMDQERlIvT0seEJMuGpiUSqbSg&oe=6551AAB9"
                                        width={89}
                                        height={18}
                                        alt="Meta logo, back to home"
                                    />
                                </a>
                            </li>
                            <li className={`${isHeaderWho ? "_afcr _afe2 _ag6g" : "_afcr  _ag6g"}`}>
                                <a
                                    aria-controls="nav-menu-section-js_a78"
                                    aria-expanded={`${isHeaderWho ? "true" : "false"}`}
                                    className="_afcs _afds"
                                    data-ga-category="c10"
                                    data-ms='{"creative":"click_menu","creative_detail":"nav_who-we-are"}'
                                    target="_self"
                                    href="#"
                                    onClick={() => changeMenu(1)}
                                >
                                    Who we are
                                    <span className="_afd6" />
                                    <span className="_afct _afcu" />
                                </a>
                                <span className="_afe7 _afdz" />
                                <ul
                                    className={`${isHeaderWho ? "_afd7 _afd8" : "_afd7"}`}
                                    id="nav-menu-section-js_a78"
                                    role="listbox"
                                    aria-expanded={`${isHeaderWho ? "true" : "false"}`}
                                >
                                    <li className="_afe8 _afdz">
                                        <span className="_afds">Who we are</span>
                                    </li>
                                    <li className=" _afdt _afdv">
                                        <ul className="_afd9">
                                            <li className="_afdc">
                                                <ul className="_afdd _afe9">
                                                    <li className="_afde _amc6">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_who-we-are_actions"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_about-us_actions"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="/actions/"
                                                        >
                                                            Our actions
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className=" _afdt _afdv">
                                        <ul className="_afd9">
                                            <li className="_afdc">
                                                <ul className="_afdd">
                                                    <li className="_afde _amc6">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_who-we-are_actions"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_who-we-are_actions"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="/media-gallery/executives/"
                                                        >
                                                            Our executives
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className=" _afdt _afdv">
                                        <ul className="_afd9">
                                            <li className="_afdc">
                                                <ul className="_afdd">
                                                    <li className="_afde _amc6">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs _afdf"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_who-we-are_learn"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_who-we-are_learn"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="/company-info/"
                                                        >
                                                            Learn about who we are
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className={`${isHeaderOur ? "_afcr _afe2 _ag6g" : "_afcr  _ag6g"}`}>
                                <a
                                    aria-controls="nav-menu-section-js_a79"
                                    aria-expanded={`${isHeaderOur ? "true" : "false"}`}
                                    className="_afcs _afds"
                                    data-ga-category="c10"
                                    data-ms='{"creative":"click_menu","creative_detail":"nav_technologies"}'
                                    target="_self"
                                    href="#"
                                    onClick={() => changeMenu(2)}
                                >
                                    Our technologies
                                    <span className="_afd6" />
                                    <span className="_afct _afcu" />
                                </a>
                                <span className="_afe7 _afdz" />
                                <ul
                                    className={`${isHeaderOur ? "_afd7 _afd8" : "_afd7"}`}
                                    id="nav-menu-section-js_a79"
                                    role="listbox"
                                    aria-expanded={`${isHeaderOur ? "true" : "false"}`}
                                >
                                    <li className="_afe8 _afdz">
                                        <span className="_afds">Our technologies</span>
                                    </li>
                                    <li className=" _afdt _affw">
                                        <ul className="_afd9">
                                            <li className="_afdc">
                                                <div className="_afd5 _afe9" tabIndex={0} role="button">
                                                    Shop devices
                                                    <span className="_afd6 _afdz" />
                                                </div>
                                                <ul className="_afdd _afea _afe9">
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_tech_quest"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_tech_quest"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="https://www.meta.com/quest/?utm_content=53191&utm_term=verify%20facebook%20page"
                                                        >
                                                            Meta Quest
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_tech_ray-ban"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_tech_ray-ban"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="https://www.meta.com/smart-glasses/?utm_content=60956&utm_term=verify%20facebook%20page"
                                                        >
                                                            Ray-Ban | Meta
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className=" _afdt _affw">
                                        <ul className="_afd9">
                                            <li className="_afdc">
                                                <div className="_afd5" tabIndex={0} role="button">
                                                    Explore apps
                                                    <span className="_afd6 _afdz" />
                                                </div>
                                                <ul className="_afdd _afea">
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_tech_facebook"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_tech_facebook"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="/technologies/facebook-app/"
                                                        >
                                                            Facebook
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_tech_messenger"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_tech_messenger"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="/technologies/messenger/"
                                                        >
                                                            Messenger
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_tech_instagram"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_tech_instagram"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="/technologies/instagram/"
                                                        >
                                                            Instagram
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_tech_whats-app"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_tech_whats-app"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="/technologies/whatsapp/"
                                                        >
                                                            WhatsApp
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_tech_horizon"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_tech_horizon"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="https://www.oculus.com/horizon-worlds/?utm_content=77361"
                                                        >
                                                            Meta Horizon
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className=" _afdt _affw">
                                        <ul className="_afd9">
                                            <li className="_afdc">
                                                <div className="_afd5" tabIndex={0} role="button">
                                                    Explore work tools
                                                    <span className="_afd6 _afdz" />
                                                </div>
                                                <ul className="_afdd _afea">
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_tech_work-tools-overview"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_tech_work-tools-overview"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="https://forwork.meta.com/?utm_content=39727"
                                                        >
                                                            Work products overview
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_tech_vr-headsets"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_tech_vr-headsets"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="https://forwork.meta.com/quest/quest-pro/?utm_content=71891"
                                                        >
                                                            Virtual reality headsets
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_tech_meta-horizon-workrooms"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_tech_meta-horizon-workrooms"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="https://forwork.meta.com/horizon-workrooms/?utm_content=95648"
                                                        >
                                                            Meta Horizon Workrooms
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_tech_workplace"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_tech_workplace"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="https://forwork.meta.com/meta-workplace/?utm_content=74049"
                                                        >
                                                            Workplace
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className=" _afdt _afdv">
                                        <ul className="_afd9">
                                            <li className="_afdc">
                                                <ul className="_afdd">
                                                    <li className="_afde _amc6">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs _afdf"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_tech_learn"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_tech_learn"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="/technologies/"
                                                        >
                                                            Learn about all technologies
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="_afcr">
                                <a
                                    className="_afcs"
                                    data-ga-category="c10"
                                    data-ga-label="nav_the-metaverse"
                                    data-ms='{"creative":"click_menu","creative_detail":"nav_the-metaverse"}'
                                    target="_self"
                                    href="/metaverse/"
                                >
                                    The metaverse
                                    <span className="_afct _afcu" />
                                </a>
                            </li>
                            <li className={`${isHeaderMeta ? "_afcr _afe2 _ag6g" : "_afcr  _ag6g"}`}>
                                <a
                                    aria-controls="nav-menu-section-js_a7a"
                                    aria-expanded={`${isHeaderMeta ? "true" : "false"}`}
                                    className="_afcs _afds"
                                    data-ga-category="c10"
                                    data-ms='{"creative":"click_menu","creative_detail":"nav_meta-and-you"}'
                                    target="_self"
                                    href="#"
                                    onClick={() => changeMenu(3)}
                                >
                                    Meta and you
                                    <span className="_afd6" />
                                    <span className="_afct _afcu" />
                                </a>
                                <span className="_afe7 _afdz" />
                                <ul
                                    className={`${isHeaderMeta ? "_afd7 _afd8" : "_afd7"}`}
                                    id="nav-menu-section-js_a7a"
                                    role="listbox"
                                    aria-expanded={`${isHeaderMeta ? "true" : "false"}`}
                                >
                                    <li className="_afe8 _afdz">
                                        <span className="_afds">Meta and you</span>
                                    </li>
                                    <li className=" _afdt _afdv">
                                        <ul className="_afd9">
                                            <li className="_afdc">
                                                <ul className="_afdd _afe9">
                                                    <li className="_afde _amc6">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_meta-and-you_iyw"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_meta-and-you_iyw"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="/meta-and-you/its-your-world/"
                                                        >
                                                            It's Your World
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className=" _afdt _afdv">
                                        <ul className="_afd9">
                                            <li className="_afdc">
                                                <ul className="_afdd">
                                                    <li className="_afde _amc6">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs _afdf"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_meta-and-you_community"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_meta-and-you_community"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="/community/"
                                                        >
                                                            Learn about our community
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="">
                        <ul className="_afd4 _afe1">
                            <li className="_afcr">
                                <a
                                    className="_afcs"
                                    data-ga-category="c10"
                                    data-ga-label="nav_shop-meta"
                                    data-ms='{"creative":"click_menu","creative_detail":"nav_shop-meta"}'
                                    target="_self"
                                    href="https://www.meta.com/?utm_content=31202&utm_term=verify%20facebook%20page"
                                >
                                    Shop Meta
                                    <span className="_afct _afcu" />
                                </a>
                            </li>
                            <li className="_afcr">
                                <a
                                    className="_afcs"
                                    data-ga-category="c10"
                                    data-ga-label="nav_news"
                                    data-ms='{"creative":"click_menu","creative_detail":"nav_news"}'
                                    target="_self"
                                    href="https://about.fb.com/news/"
                                >
                                    News
                                    <span className="_afct _afcu" />
                                </a>
                            </li>
                            <li className={`${isHeaderSupport ? "_afcr _afe2 _ag6g" : "_afcr  _ag6g"}`}>
                                <a
                                    aria-controls="nav-menu-section-js_3"
                                    aria-expanded={`${isHeaderSupport ? "true" : "false"}`}
                                    className="_afcs _afds"
                                    data-ga-category="c10"
                                    data-ms='{"creative":"click_menu","creative_detail":"nav_support"}'
                                    target="_self"
                                    href="#"
                                    onClick={() => changeMenu(4)}
                                >
                                    Support
                                    <span className="_afd6" />
                                    <span className="_afct _afcu" />
                                </a>
                                <span className="_afe7 _afdz" />
                                <ul
                                    className={`${isHeaderSupport ? "_afd7 _afd8" : "_afd7"}`}
                                    id="nav-menu-section-js_3"
                                    role="listbox"
                                    aria-expanded={`${isHeaderSupport ? "true" : "false"}`}
                                >
                                    <li className="_afe8 _afdz">
                                        <span className="_afds">Support</span>
                                    </li>
                                    <li className=" _afdt _affw">
                                        <ul className="_afd9">
                                            <li className="_afdc">
                                                <div className="_afd5 _afe9" tabIndex={0} role="button">
                                                    Shop Help Center
                                                    <span className="_afd6 _afdz" />
                                                </div>
                                                <ul className="_afdd _afea _afe9">
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_support_store-help-center_product-support-home"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_support_store-help-center_product-support-home"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="https://www.meta.com/help/?utm_content=97131&utm_term=verify%20facebook%20page"
                                                        >
                                                            Product support home
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_support_store-help-center_find-order"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_support_store-help-center_find-order"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="https://www.meta.com/order/find/?utm_content=64883&utm_term=verify%20facebook%20page"
                                                        >
                                                            Find order
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_support_store-help-center_meta-quest"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_support_store-help-center_meta-quest"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="https://www.meta.com/help/quest/?utm_content=84486&utm_term=verify%20facebook%20page"
                                                        >
                                                            Meta Quest
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_support_store-help-center_meta-portal"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_support_store-help-center_meta-portal"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="https://www.meta.com/help/portal/?utm_content=69544&utm_term=verify%20facebook%20page"
                                                        >
                                                            Meta Portal
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_support_store-help-center_ray-ban"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_support_store-help-center_ray-ban"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="https://www.meta.com/help/ray-ban-stories/?utm_content=34638&utm_term=verify%20facebook%20page"
                                                        >
                                                            Ray-Ban Stories
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className=" _afdt _affw">
                                        <ul className="_afd9">
                                            <li className="_afdc">
                                                <div className="_afd5" tabIndex={0} role="button">
                                                    App Help Center
                                                    <span className="_afd6 _afdz" />
                                                </div>
                                                <ul className="_afdd _afea">
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_support_app-help-center_facebook"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_support_app-help-center_facebook"}'
                                                            tabIndex={-1}
                                                            target="_blank"
                                                            href="https://www.facebook.com/help?ref=about.meta.com"
                                                        >
                                                            Facebook
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_support_app-help-center_messenger"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_support_app-help-center_messenger"}'
                                                            tabIndex={-1}
                                                            target="_blank"
                                                            href="https://www.facebook.com/help/messenger-app/?ref=about.meta.com"
                                                        >
                                                            Messenger
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_support_app-help-center_instagram"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_support_app-help-center_instagram"}'
                                                            tabIndex={-1}
                                                            target="_blank"
                                                            href="https://help.instagram.com/?fbclid=IwAR0eOKAhIz4VCjj3Nk9d7YDG6uePVY7K3GSxi7yTaS829no9e16Rtzwnin4"
                                                        >
                                                            Instagram
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_support_app-help-center_whatsapp"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_support_app-help-center_whatsapp"}'
                                                            tabIndex={-1}
                                                            target="_blank"
                                                            href="https://faq.whatsapp.com/?fbclid=IwAR2q8S17mg87QsNG6flzd8_jVwapuTq-12NEfDNKbe0Rj9Cfoads-QFfsnw"
                                                        >
                                                            WhatsApp
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_support_app-help-center_meta-horizon"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_support_app-help-center_meta-horizon"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="https://www.meta.com/help/quest/landing/horizon/?utm_content=25701&utm_term=verify%20facebook%20page"
                                                        >
                                                            Meta Horizon
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_support_app-help-center_workplace"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_support_app-help-center_workplace"}'
                                                            tabIndex={-1}
                                                            target="_blank"
                                                            href="https://www.facebook.com/help/work?ref=about.meta.com"
                                                        >
                                                            Workplace
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className=" _afdt _affw">
                                        <ul className="_afd9 _amc4">
                                            <li className="_afdc">
                                                <div className="_afd5" tabIndex={0} role="button">
                                                    Build with us
                                                    <span className="_afd6 _afdz" />
                                                </div>
                                                <ul className="_afdd _afea">
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_support-build-with-us_businesses"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_support-build-with-us_businesses"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="https://www.facebook.com/business/"
                                                        >
                                                            Businesses
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_support-build-with-us_creators"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_support-build-with-us_creators"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="https://www.facebook.com/creators/"
                                                        >
                                                            Creators
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_support-build-with-us_developers"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_support-build-with-us_developers"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="https://developers.facebook.com/"
                                                        >
                                                            Developers
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_support-build-with-us_careers"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_support-build-with-us_careers"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="https://www.metacareers.com/"
                                                        >
                                                            Careers
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_support-build-with-us_investors"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_support-build-with-us_investors"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="https://investor.fb.com/home/default.aspx"
                                                        >
                                                            Investors
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_support-build-with-us_media"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_support-build-with-us_media"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="https://www.facebook.com/formedia"
                                                        >
                                                            Media
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_support_researchers"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_support_researchers"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="https://research.facebook.com/"
                                                        >
                                                            Researchers
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_support_engineers"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_support_engineers"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="https://engineering.fb.com/"
                                                        >
                                                            Engineers
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_support_government"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_support_government"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="https://www.facebook.com/gpa/"
                                                        >
                                                            Government, Politics &amp; Advocacy
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_support_nonprofits"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_support_nonprofits"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="https://socialimpact.facebook.com/"
                                                        >
                                                            Nonprofits
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                    <li className="_afde">
                                                        <a
                                                            aria-hidden="true"
                                                            className="_afcs"
                                                            data-ga-category="c10"
                                                            data-ga-label="nav_support_educators"
                                                            data-ms='{"creative":"click_menu","creative_detail":"nav_support_educators"}'
                                                            tabIndex={-1}
                                                            target="_self"
                                                            href="https://education.facebook.com/"
                                                        >
                                                            Educators
                                                            <span className="_afct _afcu" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            {/* react-mount-point-unstable */}
        </div>

    )
}
