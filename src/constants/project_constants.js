import GulfWarIllnessCoverPhoto from '../assets/gulf war illness/gulfwarillness_cover.png';
import GulfWarIllnessCoverVideo from '../assets/gulf war illness/gulfwarillness_cover.mp4';
import GulfWarIllnessImage1 from '../assets/gulf war illness/web collection/gulfwarillness_image1.jpg'
import GulfWarIllnessVideo1 from '../assets/gulf war illness/web collection/gulfwarillness_video1.mp4'
import GulfWarIllnessVideo2 from '../assets/gulf war illness/web collection/gulfwarillness_video2.mp4'
import GulfWarIllnessImage2 from '../assets/gulf war illness/web collection/gulfwarillness_image2.jpg'
import GulfWarIllnessImage3 from '../assets/gulf war illness/web collection/gulfwarillness_image3.jpg'

import FatherStephenCoverPhoto from '../assets/father stephen/fatherstephen_cover.png';
import FatherStephenCoverVideo from '../assets/father stephen/fatherstephen_cover.mp4';
import FatherStephenImage1 from '../assets/father stephen/web collection/fatherstephen_image1.jpg';
import FatherStephenImage2 from '../assets/father stephen/web collection/fatherstephen_image2.jpg';
import FatherStephenImage3 from '../assets/father stephen/web collection/fatherstephen_image3.jpg';
import FatherStephenImage4 from '../assets/father stephen/web collection/fatherstephen_image4.jpg';

import MotherCoverPhoto from '../assets/mother/mother_cover.jpg';
import MotherCoverVideo from '../assets/mother/mother_cover.mp4';
import MotherImage1 from '../assets/mother/web collection/mother_image1.jpg'

import WeDoItAllTheTimeCoverImage from '../assets/We do it all the time/wedoitallthetime_cover.jpg';
import WeDoItAllTheTimeCoverVideo from '../assets/We do it all the time/wedoitallthetime_cover.mp4';
import WeDoItAllTheTimeImage1 from '../assets/We do it all the time/web collection/wdiatt_image1.jpg';
import WeDoItAllTheTimeImage2 from '../assets/We do it all the time/web collection/wdiatt_image2.jpg';
import WeDoItAllTheTimeImage3 from '../assets/We do it all the time/web collection/wdiatt_image3.jpg';
import WeDoItAllTheTimeImage6 from '../assets/We do it all the time/web collection/wdiatt_image6.jpg';
import WeDoItAllTheTimeImage7 from '../assets/We do it all the time/web collection/wdiatt_image7.jpg';
import WeDoItAllTheTimeImage8 from '../assets/We do it all the time/web collection/wdiatt_image8.jpg';

import SingAboutMeImDyingOfThirst_pdf from '../assets/We do it all the time/web collection/sing-about-me_im-dying-of-thirst.pdf';

import DollHouseCoverPhoto from '../assets/doll house/dollhouse_cover.png'
import DollHouseCoverVideo from '../assets/doll house/dollhouse_cover.mp4'
import DollHouseImage1 from '../assets/doll house/web collection/dollhouse_image1.jpg';
import DollHouseImage2 from '../assets/doll house/web collection/dollhouse_image2.jpg';
import DollHouseImage3 from '../assets/doll house/web collection/dollhouse_image3.jpg';
import DollHouseImage4 from '../assets/doll house/web collection/dollhouse_image4.jpg';
import DollHouseImage5 from '../assets/doll house/web collection/dollhouse_image5.jpg';
import DollHouseImage6 from '../assets/doll house/web collection/dollhouse_image6.jpg';
import DollHouseImage7 from '../assets/doll house/web collection/dollhouse_image7.jpg';
import DollHouseImage8 from '../assets/doll house/web collection/dollhouse_image8.jpg';
import DollHouseImage9 from '../assets/doll house/web collection/dollhouse_image9.jpg';
import DollHouseImage10 from '../assets/doll house/web collection/dollhouse_image10.jpg';

const GulfWarIllnessVideo3 = (<div className='embed-responsive-parent' id='gulf-war-illness-video1-parent'><iframe className="embed-responsive-item" src="https://player.vimeo.com/video/859626469?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="fatherstephen_video1"></iframe></div>);
const FatherStephenVideo1 = (<div className='embed-responsive-parent' id='father-stephen-video1-parent'><iframe className="embed-responsive-item" src="https://player.vimeo.com/video/859296717?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"  frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="fatherstephen_video1"></iframe></div>);
const MotherVideo1 = (<div className='embed-responsive-parent' id='mother-video1-parent'><iframe className="embed-responsive-item" src="https://player.vimeo.com/video/859296871?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="fatherstephen_video1"></iframe></div>);
const MotherVideo2 = (<div className='embed-responsive-parent' id='mother-video2-parent'><iframe className="embed-responsive-item" src="https://player.vimeo.com/video/859296979?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="fatherstephen_video1"></iframe></div>);
const WeDoItAllTheTimeVideo1 = (<div className='embed-responsive-parent' id='wdiatt-video1-parent'><iframe className="embed-responsive-item" src="https://player.vimeo.com/video/859297173?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="fatherstephen_video1"></iframe></div>);

export const projects = [
    {
        id: "gulf-war-illness",
        image_src: GulfWarIllnessCoverPhoto,
        video_src: GulfWarIllnessCoverVideo,
        name: "Gulf War Syndrome",
        isOnGoing: true,
        year: 2023,
        data_origin: ["Yuma, USA/Baghdad, Iraq"],
        forums: ["Kinetic installation", "archive", "documentary"],
        description: "This installation reproduces the facilities of YPG––a US military test-site in Arizona which simulates Middle Eastern climate. This mock-facility demonstrates how respiratory systems in Iraq and Arizona suffer parallel harms due to analogously hostile climates and military activity. Moreover, the project speculates how YPG assets could be reappropriated to produce mutualistic computation favoring the vulnerable in both regions.",
        long_description: '<p>Situated in the expansive deserts of Southwestern Arizona, the Yuma Proving Ground (YPG) is one of the largest test sites used by the US Army. The selection of this location is the result of extensive studies to find analogous terrains to Middle Eastern deserts, where the US has been active militarily for thirty years. Here, a despotic system of production creates weapons that master and make use of desert climates. Despite these conflicts, bodies living in the American Southwest and the Middle East are similarly experiencing increasingly hostile desert climates as a result of climate-change, especially in relation to dust.</p><p><i>Gulf War Illness</i> is a body of research comprised of case studies which explore how those in the American Southwest and Middle East are part of a larger and singular entity experiencing a set of <i>chronic conditions</i> globally, oftentimes exacerbated by the US military. A film detailing these studies is screened within a reproduced YPG facility and synced to the execution of a <i>dust aggravation chamber</i>, a system commonly used to ensure weapon durability by exposing them to simulated dust storms. Here, rather than a weapon, the object placed in the chamber is a low-cost medical ventilator––a device used to treat respiratory issues, such as dust inhalation––built for dust-durability based on declassified YPG weapon design documents.</p><p>Synchronized to the film, the dust chamber simulates the environmental conditions that bodies featured in the case-studies experienced. The ventilator, then, is an artificial stand-in for their respiratory system, imitating their breathing––or at times, their attempts to. Yet, in building a low-cost medical device based on weapon designs, this research alludes to a reorganized computational relationship between individuals living in regions with analogous terrains. One in which those impacted by these chronic conditions are tightly networked and as a result, pertinent information and research travels between regions––just like dust itself.</p>',
        visual_content: [
            {
                src: GulfWarIllnessImage1,
                description: "Dust aggravation chamber with the ventilator inside",
                type: "image"
            },
            {
                content: GulfWarIllnessVideo3,
                description: "Project context and introduction to case studies",
                type: "vimeo-video"
            },
            {
                src: GulfWarIllnessVideo1,
                description: "Prototype of the low cost medical ventilator",
                type: "gif-video"
            },
            {
                src: GulfWarIllnessVideo2,
                description: "Installation test",
                type: "gif-video",
            },
            {
                src: GulfWarIllnessImage2,
                description: "The ventilator is built largely using <a href='https://emergency-vent.mit.edu/' target='_blank'>open-source documents from MIT</a> which built a low-cost ventilator in response to the COVID-19 pandemic. This ventilator was used as a baseline and then modified using declassified documents from YPG.",
                type: "image"
            },
            {
                src: GulfWarIllnessImage3,
                description: "Sample declassfied documents from YPG",
                type: "image"
            },

        ]
    },
    {
        id: "father-stephen",
        image_src: FatherStephenCoverPhoto,
        video_src: FatherStephenCoverVideo,
        name: "Father Stephen Lesniewski",
        isOnGoing: false,
        year: 2022,
        data_origin: ["Chicago, USA"],
        forums: ["AV sculpture", "Language model"],
        description: "In the early 2000s, Father Stephen Lesniewski, a relatively unknown Chicago priest, used the voice recording of a child and a stack of CD-ROMs to create what is now a viral anti-abortion ‘character’. In this installation, a language model strips the imagined reality of Lesniewski’s rhetoric––one dependent on an emotional appeal from a character that could never be real.",
        long_description: "<p>Father Stephen Lesniewski is a Chicago-based priest and ardent abortion access opponent who has been active since the early 1990s. Though relatively unknown, Lesniewski’s name appears alongside the earliest mentions online of the “Letter from an Unborn Child”––a viral form of anti-abortion content which is frequently shared amongst right-wing circles. The “letter” is written from the perspective of an aborted child speaking to its mother.</p><p><a href=\"https://wng.org/articles/letter-from-an-aborted-child-1617287857\" target=\"_blank\">According to a number of evangelical journals,</a> this letter was written by the priest or a member of his parish in the early 2000s. Shortly thereafter, Lesniewski recorded an eight year old child reading the letter and began distributing CD copies of this audio outside of abortion clinics. The audio is disturbing, creating a character that, at its core, effectively masks its middle-aged author. </p><p>In the decades since, <a href=\"https://www.youtube.com/@fatherstephen6925/videos\" target=\"_blank\">Lesniewski has also recorded and uploaded dozens of digital sermons to his YouTube channel.</a> Each video, running nearly half an hour, is full of gaffes, non sequiturs, unintelligble comments and factual errors. They are unlike the audio recording of the “Letter from the Unborn Child,” which is to say they don’t conceal Lesniewski’s voice behind a character, instead presenting the priest and his ideologies bare.</p><p>This installation is an explicit representation of how Lesniewski projected his incoherent oration onto an illusory character––one which he depended on for emotional appeal. Here, a hyperrealistic robot baby/doll sits in front of a television playing Lesniewski’s sermons and, using language processing, simplifies statements from the sermons into similar ones which are found in the “Letter from an Unborn Child.”</p><p>The letter and the priest's manipulation of it signifies a rudimentary prelude to the current landscape of methods used by political operatives. Namely, in which content production and technology are used beyond misinformation, but to achieve emotional appeal by distorting the very nature of reality––creating an <i>imaginary</i> under which their arguments are more tenable. With the recording of a child, the imaginary that Lesniewski created was the existence of “Unborn Child” itself, which having never been born, could only ever have <i>truly lived</i> in his dreams. Today, this kind of reality-production has exponentiated, occurring at the high octane churn of content production––where audiences are immersed in imaginaries which have only grown in sophistication since Lesniewski.</p>",
        visual_content: [
            {
                src: FatherStephenImage1,
                description: "Installation setup. The baby/doll watches and translates Stephen Lesniewski's sermons, which play in the background.",
                type: "image"
            },
            {
                content: FatherStephenVideo1,
                description: "Installation preview and context",
                type: "vimeo-video"
            },
            {
                src: FatherStephenImage2,
                description: "",
                type: "image"
            },
            {
                src: FatherStephenImage3,
                description: "",
                type: "image"
            },
            {
                src: FatherStephenImage4,
                description: "",
                type: "image"
            },
        ]
    },
    {
        id: "mother",
        image_src: MotherCoverPhoto,
        video_src: MotherCoverVideo,
        name: "mother",
        isOnGoing: false,
        year: 2022,
        data_origin: ["Seattle, USA"],
        forums: ["Kinetic sculpture"],
        description: "A portrait of my mother using the kind of private data she provides medical institutions. Using an ML generated model, based on actual vitals measured from her, these machines pump and breath at the (generated) rate that my mother’s heart and lungs did on 22/02/22. A portrait in the form of a clock, running everyday and reliving 22/02/22 forever.",
        long_description: "<p>A speculative scenario toying with a P2P model of data ownership. This installation exists as a fictional scene: a son, after the loss of a mother, is granted access to a digital server where he finds extensive digital traces of her. Among these spectres, are medical logs that under today’s data collection standards, are stored by your medical provider and thus inaccessible to dependents. Using data from the locker and spare parts he finds in his shed, the son rebuilds an image of his mother.</p><p>To create this scenario, the fictional medical data was supplied by my own mother. I asked her to record her vitals every half hour on the 22nd of February 2022, which I then ran a model on to generate a 24 hour image of her heart and breathing rate. This information powers a couple of machines––a mechanical heart and lungs.</p><p>If you looked at these machines at this moment, they’d be pumping and breathing at the (generated) rate that my mother’s heart and lungs did at the same time on the 22nd of February. A portrait in the form of a clock, running everyday and reliving 22/02/22 forever.</p>",
        visual_content: [
            {
                src: MotherImage1,
                type: "image"
            },
            {
                content: MotherVideo1,
                description: "Installation preview",
                type: "vimeo-video",
            },
            {
                content: MotherVideo2,
                description: "A stream of my mother's generated vitals from the 22nd of February 2022 overlaid with a voice recording she recorded for me on the same day.",
                type: "vimeo-video",
            }
        ]
    },
    {
        id: "we-do-it-all-the-time",
        image_src: WeDoItAllTheTimeCoverImage,
        video_src: WeDoItAllTheTimeCoverVideo,
        name: "We do it all the time",
        isOnGoing: false,
        year: 2021,
        data_origin: ["A Google server, somewhere"],
        forums: ["Programmatic film", "sculpture", "thesis"],
        description: "Highway Hypnosis is a phenomenon where a person driving <i>stretches of repetitive scenery</i> has no recollection doing so. This film uses Highway Hypnosis as a metaphor to explore how computational transactions define ‘crisis.’ The film renders programmatically, updating its visuals to feature crises in my recent web history––suggesting that through a stream of <i>interchangeable scenery</i>, just like on the road, we’ve fallen asleep at the wheel.",
        long_description: "<p><b>i. <i>We do it all the time</i> (film)</b></p><p>Isn’t unpredictability what keeps our eyes open?</p><p><i>Highway hypnosis</i> is a phenomena occurring on roads with <i>only one type of visual scenery</i> in which a person can drive great distances with no recollection of having done so. One moment you’re on the highway and the next you’re blankly sitting outside your destination; half an hour of driving reduced to a blip––the distance you’ve driven and a slightly emptier tank as the only proof of the gaping hole in your memory.</p><p><i>We do it all the time</i> is an essay film which uses highway hypnosis as metaphor to explore how contemporary computing has redefined our understanding and experience of crisis. The film proposes the ‘transactional crisis,’ where related crises are disjointed and expressed as seemingly isolated units with a transactional solution––a click, a share, a donation. Under this disjointed view of crisis, digital content––such as GoFundMe requests for medical bills––are so commonplace that the posts themselves, <i>like a singular roadside scenery,</i> have developed a shared vernacular and visual language.</p><p>To make this point clear, <i>We do it all the time</i> is a film that generates dynamically. Prior to each run, a program parses my web history and updates the film’s visuals content with videos of crises that I have recently viewed. Thus, each runtime is different––collaging videos which reference different events, but are stylistically similar. Thus, in all of the sameness that these different videos produce, the film’s argument remains the same: that through an unending stream of interchangeable crises, we’ve fallen asleep on the wheel.</p><br/><p><b>ii. <i>Sing about me, I’m dying of thirst</i> (thesis)</b></p><p>Accompanying this film is a thesis, which expands upon the definition and implications of the transactional crises using GoFundMe fundraisers in drought-stricken Texas as a case study. <a target='_blank' href=" + SingAboutMeImDyingOfThirst_pdf + ">You can view it here.</a></p>",
        visual_content: [
            {
                src: WeDoItAllTheTimeImage1,
                description: "Installation setup––<i>We do it all the time</i> is streamed on a shattered windshield above pieces from a car interior.",
                type: "image"
            },
            {
                src: WeDoItAllTheTimeImage2,
                description: "A photo taken during one of the screenings of the <i>We do it all the time</i>. The clips from this generated iteration featured newsreel from the <a href='https://en.wikipedia.org/wiki/Killing_of_Abdulrahman_al-Awlaki' target='_blank'>2011 illegal killing of a US teenager named Abdulrahman Anwar al-Awlaki</a> by the CIA via drone strike.",
                type: "image"
            },
            {
                content: WeDoItAllTheTimeVideo1,
                description: "Introductory excerpt from <i>We do it all the time</i>",
                type: "vimeo-video",
            },
            {
                src: WeDoItAllTheTimeImage3,
                type: "image",
            },
            {
                src: WeDoItAllTheTimeImage6,
                description: "For the installation and screening of <i>We do it all the time</i> a series of car interior parts were created based on clips that were found in previous iterations of the film. This particular piece is a headrest upholstered with teddy bear skins that resembled stuffed animals placed at the memorial of <a href='https://en.wikipedia.org/wiki/Dimitris_Christoulas' target='_blank'>Dimitris Christoulas, a Greek pensioner who committed suicide in protest of austerity measures the government took after the '08 financial crisis.</a>",
                type: "image",
            },
            {
                src: WeDoItAllTheTimeImage7,
                description: "Gas and brake pedals, one for each of the al-Awlaki children––Abdulrahman and Nawar––who were killed by the US government 6 years apart.",
                type: "image",
            },
            {
                src: WeDoItAllTheTimeImage8,
                description: "Reference image: Félix González-Torres, Untitled (A Portrait), 1991",
                type: "image",
            }
        ]
    },
    {
        id: "doll-house",
        image_src: DollHouseCoverPhoto,
        video_src: DollHouseCoverVideo,
        name: "Doll House",
        isOnGoing: false,
        year: 2020,
        data_origin: ["Non-specific"],
        forums: ["Web platform"],
        description: "During the pandemic lockdowns, ‘inviting someone in’ often only extended so far as digital interaction. Doll House, then, was an explicit extension of my home onto the web––a space for experiments in virtual intimacy towards visitors who, largely, came from my immediate community.",
        long_description: "<p>Now defunct, <i>Doll House</i> was a digital environment which operated as an extension of my physical home onto cyberspace––acting as a substitute for experience that had been restricted by the pandemic lockdowns. In practice, it was composed of a series of rooms which attempted to digitally reproduce interactions which happen within the home.  Each room focused on a specific domestic experience––craft, intimate communication, community and so forth. Interactive objects populated these rooms, each either containing private ephemera––personal essays, photos, notes, etc.––or provided a means of digital interaction––a web radio where friends played playlists, a portal where my loved ones could share things they made in lockdown.</p><p>At their core, each component of <i>Doll House</i> intended to define and reflect the specificity of what the home <i>felt like</i> and moreover what had been carved out in light of our siloed experiences within them.</p>",
        visual_content: [
            {
                src: DollHouseImage1,
                description: "<i>Doll House</i> UI for the 'entry room.' Users could interact with the space by clicking objects, elements of the room or the buttons below.",
                type: "image"
            },
            {
                src: DollHouseImage2,
                description: "Illustration for the 'rec room,' which operated as a space for friends to share various media, including their mixes via a live-stream radio.",
                type: "image"
            },
            {
                src: DollHouseImage3,
                description: "A collection of writings, both private and public.",
                type: "image"
            },
            {
                src: DollHouseImage4,
                description: "Illustration for a room which exhibited works created during the pandemic by friends and I.",
                type: "image"
            },
            {
                src: DollHouseImage5,
                type: "image"
            },
            {
                src: DollHouseImage6,
                description: "Website README. Displayed in the entry room to provide  context for visitors.",
                type: "image"
            },
            {
                src: DollHouseImage7,
                type: "image"
            },
            {
                src: DollHouseImage8,
                description: "Identity for Dog Year––a web-radio that <i>Doll House</i> hosted, created by Nikko Gary.",
                type: "image"
            },
            {
                src: DollHouseImage9,
                type: "image"
            },
            {
                src: DollHouseImage10,
                type: "image"
            },
        ]
    }
]
