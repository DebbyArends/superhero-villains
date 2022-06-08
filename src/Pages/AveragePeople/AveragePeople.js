import React from 'react';
import "./AveragePeople.css";
import {useHistory} from "react-router-dom";
import superman from "../../assets/superman-average.png"


function AveragePeople() {
    const history = useHistory()
    return (
        <section className="outer-container-average">
            <article className="inner-container-average">
                <div className="white-background-average">
                    <div className="blue-background-average">
                        <h1>Average or not?</h1>
                    </div>
                    <p id="article-written">Original article is written by Mark Manson, read the full article <a
                        href="https://markmanson.net/being-average" target="_blank" rel="noreferrer"
                        id="original-article">here</a></p>
                    <p>There’s this guy. World-renowned billionaire. Tech genius. Inventor and entrepreneur. Athletic
                        and talented and handsome with a jaw so chiseled it looks like Zeus came down from Olympus and
                        carved the fucker himself.</p>
                    <br/>
                    <p>This guy’s got a small fleet of sports cars, a few yachts, and when he’s not giving millions of
                        dollars to charities, he’s changing out supermodel girlfriends like other people change their socks.</p>
                    <br/>

                    <p>This guy’s smile can melt the damn room. His charm is so thick you can swim in it. Half of his
                        friends were TIME’s “Man of the Year.” And the ones who weren’t don’t care, because they could buy the
                        magazine if they wanted to. When this guy isn’t jetsetting around the world or coming up with the latest
                        technological innovation to save the planet, he spends his time helping the weak and helpless
                        and downtrodden.</p>
                    <br/>
                    <p>This man is, you guessed it, Bruce Wayne. Also known as the Batman. And (spoiler alert) he
                        doesn’t actually exist. He is fiction.</p>
                    <br/>
                    <p>It’s an interesting facet of human nature that we seem to have a need to come up with
                        fictional heroes that embody perfection and everything we wish we could be. Medieval Europe had
                        its tales about gallant knights slaying dragons and saving princesses. Ancient Rome and Greece had
                        their myths about heroes who won wars single-handedly and in some cases confronted the Gods
                        themselves. Every other human culture is replete with such fantastical stories as well.</p>
                    <br/>
                    <p>And today, we have comic book superheroes. Take Superman. I mean, the guy is basically a God with
                        a
                        human body wearing a blue jumpsuit and red underpants on inside-out. He is indestructible and
                        unbeatable. And the only thing as sturdy as his physical fortitude is his moral fortitude. In
                        Superman’s
                        world, justice is always black/white, and Superman never wavers from doing what’s right. No
                        matter what.</p>
                    <br/>
                    <p>I don’t think I’m exactly shaking up the field of psychology by suggesting that, as humans, we
                        have a
                        need to conjure up these heroes to help us cope with our own feelings of powerlessness. There
                        are over
                        7.2 billion people on this planet, and really only about 1,000 of those have major worldwide
                        influence
                        at any given time. That leaves the other 7,199,999,000 +/- of us to come to terms with the
                        limited scope
                        of our lives and the fact that the vast majority of what we do will likely not matter long after
                        we’ve
                        died.
                    </p>
                    <br/>
                    <h4 id="find-out">So let's not take everything to serious and find out which superhero or villain you would be in
                        the multiverse.</h4>
                    <img src={superman} alt="superman" className="image-superman"/>
                    <button
                        className='button-average'
                        onClick={() => history.push("/login")}
                    >
                        Let's go!
                    </button>
                </div>
            </article>
        </section>
    );
}

export default AveragePeople;