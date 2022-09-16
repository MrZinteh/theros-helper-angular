import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GodDetails, GodNote} from "../../shared/interfaces/god-details";

@Component({
  selector: 'app-details',
  templateUrl: './god-details.component.html',
})
export class GodDetailsComponent {

  _god!: {[key: string]: any };

  gods: GodDetails[] = [
    {
      name: "Athreos",
      domain: "god of passage",
      img: "athreos.png",
      notes: [
        {
          title: "Goals",
          info: [
            "Athreos endlessly works to maintain the balance between Nyx, the Underworld, and the lands of the living. The River Guide sees himself as a servant of the mortal world and knows nothing of the glamor, honor, or mystery mortals often ascribe such to him. Rather, he does what must be done, and should some cosmological condition fall out of sorts, the River Guide and his servants work with silent efficiency to restore balance."
          ],
          expanded: false,
        },
        {
          title: "Divine Relationships",
          info: [
            "Heliod and Erebos: Athreos cares little for the dealings of the other gods. As long as other deities don’t impinge on the border between life and death, either by overstepping their bounds or by trying to draw the dead back into life, the River Guide has little to do with them. More than once, this isolation has put Athreos in silent conflict with Heliod and Erebos, both of whom subtly resent Athreos for limiting how much each can meddle in the other’s realm. At the same time, the River Guide’s role as a buffer between the two vindictive gods actively prevents their grudges from exploding into divine warfare.",
            "Thassa: Thassa bears a chilly respect for Athreos. In a time before reckoning, boundaries divided the god of the sea’s dominion from the Tartyx River. Though the god of the sea quietly resents sharing even a drop of water, she considers the River Guide to be a quiet, unobtrusive trespasser on her favored element and keeps her distance. Were her respect to wane, though, Thassa would eagerly vie to control the Rivers That Ring the World."
          ],
          expanded: false,
        },
        {
          title: "Known Followers",
          info: ["None"],
          expanded: false,
        },
      ],
    },
    {
      name: "Ephara",
      domain: "god of the polis",
      img: "ephara.png",
      notes: [
        {
          title: "Goals",
          info: [
            "Ephara seeks always to further cities: establishing them, protecting them, and seeing them grow. She supports those who build new cities and those who free others from tyranny. Ephara knows that not all threats to a city come from outside it, and she encourages her followers to watch out for tyranny and injustice from within. She seeks for justice to prevail in civilized lands.",
            "Ephara seeks far more for her cities than mere safety. She drives every city to aspire toward efforts that help its people thrive. Civic responsibility is essential in Ephara’s eyes, and having an engaged citizenry is important. The pursuit of knowledge is also a vital task, and she encourages advances in philosophy and science. As the scholars in her cities obtain or derive new knowledge, Ephara’s magic scrolls grow ever longer. Finally, art is of critical importance to a thriving city. Ephara particularly supports architecture, the creation of which often drives industry and sculpture, though she doesn’t scorn other varieties of artistic expression."
          ],
          expanded: false,
        },
        {
          title: "Divine Relationships",
          info: [
            "Heliod: Ephara and Heliod have aligning interests, since they both value structure and justice. Ephara works toward establishing judicial systems that enforce the laws and uphold the values that Heliod holds dear.",
            "Thassa and Purphoros: Ephara is also on good terms with Thassa, the god of the sea, because Ephara recognizes the necessity of water for a thriving polis. She also admires Purphoros’s craft, realizing the essential role of the forge and other forms of industry to build a city.",
            "Nylea: Ephara and Nylea are almost polar opposites, and there is no shortage of bad blood between the god of the cities and the god of the hunt. Nylea resents the construction of every building in a place that once held plants and animals, and Ephara has no patience for any wild creature that encroaches on a settlement. Ephara looks at the wilderness and sees only wasted potential, while Nylea looks at cities and sees only destruction.",
            "Phenax: Ephara has a deep-seated hatred for Phenax. While Ephara can appreciate the perspective of most of her peers, she has no such understanding for those who would deliberately try to undermine a thriving social structure. Ephara opposes Phenax and what she sees as his utter disdain for everything she stands for.",
            "Karametra: Her relationship with Karametra is a difficult one from either perspective. Ephara approves of agriculture, a key ingredient for the development of cities, and both gods are concerned with defense of settlements. Even so, Karametra is tied to Setessa and the wild lands, where Ephara is distrusted, and although Karametra and Nylea have their own complicated relationship, Karametra strongly favors Nylea over Ephara."
          ],
          expanded: false,
        },
        {
          title: "Known Followers",
          info: ["The Council of Meletis"],
          expanded: false,
        },
      ],
    },
    {
      name: "Erebos",
      domain: "god of the dead",
      img: "erebos.png",
      notes: [
        {
          title: "Goals",
          info: [
            "Erebos wants above all to maintain his position of absolute authority over the realm of the dead. He lashes out at anyone who aids souls in escaping from him or otherwise tries to subvert the inevitability of death.",
            "Erebos is patient, usually willing to wait for souls to come to him, but he does interfere in the mortal realm on occasion. When the other gods displease him, he sends mortal agents or Nyxborn monsters to kill the worshipers of the offending gods and spread despair.",
            "Many of Erebos’s schemes target those who escape his clutches. He regularly sends agents to retrieve the Returned soul or the wayward eidolon of a hero of great renown who has succeeded in returning to Theros. If any of the dead, renowned or otherwise, escape the Underworld fully intact —without identities erased— Erebos will spare nothing to make an example of the fugitive and any who provided assistance."
          ],
          expanded: false,
        },
        {
          title: "Divine Relationships",
          info: [
            "Heliod: Erebos loathes Heliod, who banished him to the Underworld eons ago, forever severing him from the world of life and light. Erebos takes particular delight in profaning Heliod’s temples, defiling the raiment of his priests, slaughtering his worshipers, and claiming the souls of his champions. Erebos believes that Heliod will one day challenge him for control of the Underworld. He looks forward to that day, certain that his lesser brother can’t possibly prevail within Erebos’s own territory.",
            "Phenax: Erebos holds a special grudge against Phenax. Phenax readily teaches others how to escape the Underworld as the Returned and even sneaks into the Underworld to assist them, earning him Erebos’s undying ire.",
            "Pharika and Karametra: Pharika and Karametra understand, better than many of the other gods, that life and death are closely intertwined. Pharika’s tinctures can either extend a life or snuff it out, and Karametra’s planters know that reaping follows sowing in turn. Although he appreciates what these gods have in common with him, Erebos occasionally feels the need to remind them that the dead are his, and other gods’ acceptance of death’s inevitability doesn’t make them masters of it.",
            "Athreos and Klothys: Erebos has no true allies but operates closely with Athreos and Klothys. Athreos is one of the few beings Erebos trusts to be as committed as he is to ensuring that the passage into death is a one-way trip. Klothys, too, would see the dead remain dead, concerned as she is with the acceptance of destiny."
          ],
          expanded: false,
        },
        {
          title: "Known Followers",
          info: ["Melantha Zotikos"],
          expanded: false,
        },
      ],
    },
    {
      name: "Heliod",
      domain: "god of the sun",
      img: "heliod.png",
      notes: [
        {
          title: "Goals",
          info: [
            "In Heliod’s mind, he is the ruler of the gods, and he wants merely for his rightful place to be recognized. He imagines Nyx rebuilt as his personal palace, where all can witness him in his glory. He considers himself a kind and beneficent ruler—a benign autocrat, not a tyrant—and he doesn’t expect abject servility from anyone, god or mortal. He just wants everyone to defer to his will and carry out his orders. He believes that his decisions are always just and right, and that if his sovereignty were properly respected, there would be peace and order in Nyx and the mortal world alike.",
          ],
          expanded: false,
        },
        {
          title: "Divine Relationships",
          info: [
            "Erebos: Heliod hates and fears Erebos, his dark twin and his shadow. He views the god of the dead as a pathetic liar and coward who wallows in self-pity in his exile.",
            "Purphoros: Heliod’s repeated attempts to establish himself as the ruler of the pantheon anger Erebos and Purphoros, who both have a degree of the arrogance he demonstrates.",
            "Thassa and Nylea: Thassa and Nylea, by contrast, aren’t bothered by his efforts because they see themselves as being safely outside his reach. He could declare himself the ruler of the pantheon, they reason, but his dictates can’t alter the rhythms of the sea and the cycles of nature. Thassa and Nylea will continue as they are, as they always have been, whatever squabbles their brothers might have.",
            "Ephara, Karametra and Iroas: Ephara, Karametra, and Iroas are closely aligned with Heliod in attitude and philosophy. In some ways, these three gods represent the principles and the abstract nature of Heliod made tangible and concrete through the lives of mortals. Heliod represents a divine, natural, moral law; Ephara gives those laws a concrete manifestation by establishing mortal society in the poleis. Heliod controls the radiant sun that makes the natural world flourish; Karametra brings the interplay of light and nature to life for mortals in the practice of agriculture. And while Heliod stands for justice, Iroas actually fights for it, taking up arms against brutality and injustice in defense of what is good and right.",
            "Kruphix: Heliod is also plagued by a nagging suspicion that the true ruler of the pantheon is Kruphix, a mysterious being who is capable of sealing the borders between the mortal world and the divine realm of Nyx. Kruphix is perhaps the only being who can impose limits on the other gods’ actions, which makes Heliod resent and fear the god of horizons."
          ],
          expanded: false,
        },
        {
          title: "Known Followers",
          info: ["Axemos (Champion)"],
          expanded: false,
        },
      ],
    },
    {
      name: "Iroas",
      domain: "god of victory",
      img: "iroas.png",
      notes: [
        {
          title: "Goals",
          info: [
            "Iroas sees existence as a series of glorious battles to be won by both him and his followers. War is a testing ground from which only the bravest and strongest emerge. Between battles, there are feats of endurance and physical prowess to perform. Iroas exhorts his followers to hone their bodies and minds just as they hone their blades. He is certain that to slacken his vigilance and grow lazy would guarantee his demise at the edge of his brother’s blood-soaked axe. Iroas pushes his followers to be ready at all times to meet conflict head-on.",
          ],
          expanded: false,
        },
        {
          title: "Divine Relationships",
          info: [
            "Mogis: Iroas is defined by his opposition to his twin brother, Mogis. Although both love battle, Iroas holds an honorable and valorous view of warfare, whereas Mogis lusts for carnage and butchery. Iroas firmly believes that mortals will always fight, whether in war or in less consequential pursuits. His charge is to ensure that war is waged with a code of honor and to prevent his brother’s depravity from spreading through the world.",
            "Purphoros: Iroas holds an abiding respect for Purphoros, who girds his warriors in the products of his artifice. Iroas sees finely crafted arms as the highest form of art, sublime and deadly at once. Still, Iroas finds Purphoros’s volatile temper and bouts of passion unbecoming of one with such talent at creating weapons of war.",
            "Heliod: Iroas champions the cause of justice and thus seeks Heliod’s guidance and counsel from time to time. During Heliod’s piques of arrogance and temper, Iroas is the one who advocates restraint and calm. More often than not, the two deities agree where matters of justice and honor are concerned."
          ],
          expanded: false,
        },
        {
          title: "Known Followers",
          info: ["Prodotis Timimenos (Champion)"],
          expanded: false,
        },
      ],
    },
    {
      name: "Karametra",
      domain: "god of harvests",
      img: "karametra.png",
      notes: [
        {
          title: "Goals",
          info: [
            "Karametra doesn’t engage in underhanded politicking or petty disputes. She seems to stand above the quarrels and tumultuous rivalries of other deities, and equally aloof from the machinations of the mortal world. Her fundamental concern is for the well-being of mortal folk, starting with their physical health but also including their need for security, love, and belonging.",
            "Karametra is worried about the mortal cost of the upcoming war and is preparing a contingency plan of nyxborn creatures who she will learn to cultivate crops when mortals have wiped each other out. Berthazu is her first test."
          ],
          expanded: false,
        },
        {
          title: "Divine Relationships",
          info: [
            "Heliod: Karametra respects Heliod's role in life, but mocks his pompous nature.",
            "Nylea: The relationship between Karametra and Nylea is respectful but strained. Nylea is disappointed by Karametra’s decision, as a nature deity, to subordinate nature to the needs of mortals. Karametra is frustrated by what she sees as Nylea’s refusal to recognize mortal folk—and all their civilizations—as part of the natural world. Despite this tension, both gods encourage their worshipers to leave offerings at each other’s shrines.",
            "Iroas and Mogis: The gods who provoke Karametra’s sharpest disdain are Iroas and Mogis, who seem devoted to the idea of preventing mortal life from fully flourishing. War—even if it’s couched in noble terms, as Iroas’s followers like to do—is fundamentally an instrument of death, bringing a premature and pointless end to mortal life. That said, Karametra does recognize the need to fight in defense of one’s life, family, and community when they come under attack, so she and Iroas are able to find some common ground in that matter—and in their shared hatred of Mogis."
          ],
          expanded: false,
        },
        {
          title: "Known Followers",
          info: ["Berthazu"],
          expanded: false,
        },
      ],
    },
    {
      name: "Keranos",
      domain: "god of storms",
      img: "keranos.png",
      notes: [
        {
          title: "Goals",
          info: [
            "For good or ill, Keranos exists as a disruptive force. He doesn’t desire authority over other gods and, in fact, doesn’t particularly enjoy their company. Keranos finds satisfaction in investing bright mortals with prescient visions to see how they adapt. Those who prove themselves decisive and intelligent, such as the missing Queen Cymede of Akros, earn his grudging respect and continued blessings of precognition. He finds satisfaction not only in granting insight, but also in expressing the awesome fury of the storm. Where others see only chaos and destruction in storms, he sees them as shaping the firmament in ways that challenge and engage mortals. His blasts of lightning set house and forest ablaze, thus rendering the soil clear for new life and new creations. His is a vision he alone is equipped to see. He is content to watch his divine kinfolk scheme and plot while he looks on, stern and inscrutable.",
          ],
          expanded: false,
        },
        {
          title: "Divine Relationships",
          info: [
            "Keranos is neither friendly nor sociable, so his dealings with most of the rest of the pantheon tend to be terse, formal, and brief. This doesn’t mean that no interactions of note take place, however.",
            "Thassa: Of all the gods, Thassa has the most cordial relationship with Keranos. He enjoys the sea god’s love of ancient lore, introspection, and complex patterns. The two sometimes talk for days at a time debating the flaws in ancient sophistries and discussing the meaning of the stars. Thassa, imperturbable and constant, makes the ideal counter to the wise yet temperamental Keranos.",
            "Purphoros: Another interesting relationship exists with Purphoros. The passions of the divine blacksmith run hot, as does the need to create. The melding of Keranos’s inspiration with Purphoros’s passion is a formidable combination. This partnership resulted in the creation of Epiphany, Keranos’s mighty javelin."
          ],
          expanded: false,
        },
        {
          title: "Known Followers",
          info: ["None"],
          expanded: false,
        },
      ],
    },
    {
      name: "Klothys",
      domain: "god of destiny",
      img: "klothys.png",
      notes: [
        {
          title: "Goals",
          info: [
            "Once content to oversee and preserve destiny from the Underworld, Klothys now endeavors to undo the cosmic damage caused by Heliod, Xenagos, and ambitious mortals in recent years. The ways in which they ravaged reality to realize their selfish dreams has threatened Theros, and only by untangling the strands of destiny can Klothys set things right. The status quo she seeks to restore, however, comes with a cost in mortal casualties and societal upheaval that would accompany this process. She intends to humble the same institutions that condoned or committed these crimes against Theros. When her efforts have laid low the proud, the defiant, and the exploitative, then Klothys will have restored the natural order and ensured the world’s survival.",
          ],
          expanded: false,
        },
        {
          title: "Divine Relationships",
          info: [
            "Heliod: Klothys views many of the gods with disdain, considering them to be complicit in Xenagos’s theogenesis, Heliod’s acts of arrogance, or both. She reserves special contempt for Heliod and his champions, relishing every opportunity to teach them humility.",
            "Ephara and Karametra: Klothys also clashes with other gods associated with order and progress, seeing their defiance of the natural order as a dangerous affront. Ephara’s ravenous colonization, Iroas’s passion for overcoming insurmountable odds, and Karametra’s taming of nature all run the risk of inspiring ambitious mortals who lust for ever more power and strain to break away from their proper place in the cosmos.",
            "Thassa, Purphoros and Nylea: Klothys respects the other gods whose interests balance creation and destruction, such as Thassa, Purphoros, and Nylea, considering them better attuned to Theros’s needs and destiny’s myriad outcomes. Nylea shares Klothys’s delight in the world’s natural cycles. Purphoros’s willingness to build and demolish appeases Klothys—as well as the fact that he despises Heliod as much as she does.",
            "Erebos and Athreos: Klothys’s relationships with Erebos and Athreos are complicated. Ages spent in the Underworld with Erebos have driven home for her how arrogant and tyrannical he is, as ready to commit the same sins as Heliod if given the opportunity. Even so, Erebos and Klothys maintain a level of mutual respect. Until recently, Klothys and Athreos were unflappable allies. But now her emergence from the Underworld has blurred the borders between the realms, as she draws horrors into the mortal realm with her and thereby raises Athreos’s ire.",
            "Kruphix: Of course, Klothys trusts no other god as much as she does Kruphix, who also recalls Theros’s earliest hours. The two have a deep respect for one another."
          ],
          expanded: false,
        },
        {
          title: "Known Followers",
          info: ["None"],
          expanded: false,
        },
      ],
    },
    {
      name: "Kruphix",
      domain: "god of horizons",
      img: "kruphix.png",
      notes: [
        {
          title: "Goals",
          info: [
            "More than any other god, Kruphix simply is. He seeks nothing but to oversee the acquisition of knowledge, maintain the cycles of time, and uphold the divine order. He views his fellow gods as petty and vengeful, and he opposes anyone who tries to obtain power that would upset the delicate balance of the pantheon.",
            "Kruphix is the eldest of the gods and sees it as his responsibility to rein in the excesses of his younger siblings. Unlike Heliod, Kruphix knows that he isn’t powerful enough to impose his will unilaterally. Instead, he plays the other gods against one another and serves as a mediator in their endless disputes. He takes care to ensure that the other gods view him as impartial, which he considers essential to maintaining his authority."
          ],
          expanded: false,
        },
        {
          title: "Divine Relationships",
          info: [
            "Heliod: Kruphix strives to hold himself above the disputes of the gods, but like any other god, he has both rivals and allies. Chief among the former is the sun god Heliod, whom Kruphix sees as an arrogant, dangerous threat to the balance of power among the gods. He seldom acts against Heliod openly, preferring to warn others about the sun god’s efforts to seize power at their expense.",
            "Erebos and Athreos: Since every mortal soul must eventually pass beyond the horizon and into death, Kruphix respects both Erebos and Athreos. He sees Erebos as a necessary check on Heliod’s power, and he even allowed Athreos to continue his vital work on the fringes of the mortal world when he bound all the other gods within the fabric of Nyx. Erebos and Kruphix blame one another for Klothys’s recent emergence from the Underworld, a situation neither seems able to control.",
            "Purphoros: Purphoros loathes Kruphix for temporarily hobbling his mind following an attack against Heliod, but Kruphix holds no grudge against Purphoros. That particular punishment upset the balance too far in the other direction, and Kruphix is more likely to side with Purphoros than Heliod in the future.",
            "Klothys: Of all the gods, only Klothys truly concerns Kruphix. He hoped that she would remain secret and secluded in the Underworld, and he doesn’t know what her emergence portends. She is the only other god whose existence predates mortal belief, and though he is unlikely to draw her ire by manipulating destiny, he doesn’t know how her return will affect the pantheon."
          ],
          expanded: false,
        },
        {
          title: "Known Followers",
          info: ["None"],
          expanded: false,
        },
      ],
    },
    {
      name: "Mogis",
      domain: "god of slaughter",
      img: "mogis.png",
      notes: [
        {
          title: "Goals",
          info: [
            "To Mogis, the world is a canvas upon which he paints in blood. His goals are easy to understand, thus easily fulfilled by his minions. Mogis wants to unmake the world through savagery. Let every polis fall and the works of mortals burn—everything comes to ruin in time, and Mogis believes that time should be now. Only the most brutal and savage among the mortals should survive— his chosen few. Once the world lies in ruin with his brother dead at his feet, Mogis’s goals will be achieved.",
          ],
          expanded: false,
        },
        {
          title: "Divine Relationships",
          info: [
            "Iroas: Mogis’s existence is defined by his eternal struggle against his twin brother, Iroas. (Only a handful of contradictory myths address the parentage of these gods, but they are universally described as twins.) Any of Mogis’s actions and endeavors contribute to undermining and ultimately destroying Iroas. Any divine relationships Mogis might enter into are born of convenience and as a means to the end. Mogis is incapable of loyalty and should be expected to break any pact or agreement once it has outlived its usefulness.",
            "Erebos: Erebos appreciates Mogis’s single-minded desire to destroy because it serves as a means to bring ever more souls into his realm. Also, Erebos occasionally steers Mogis’s rampages in directions that inconvenience Heliod. This disruption inevitably leads to Heliod calling on Iroas to battle his brother, perpetuating the endless cycle of conflict between the twins.",
            "Phenax: Of all his fellow gods, Mogis holds the most respect for Phenax. Mogis can’t help but smile at the chaos Phenax is able to cause and the carnage the Returned wreak on the world. Phenax has a talent for inciting conflict, which allows Mogis to revel in the resulting strife.",
            "Ephara and Karametra: Mogis harbors an abiding disrespect, verging on hatred, for Ephara and Karametra. Ephara’s neat, orderly cities are a delight to destroy, especially given her fussy, precise adherence to rules. Likewise, Ephara’s close relationships with Iroas and Heliod provoke Mogis’s disgust. Mogis disdains Karametra because she aids mortals and provides succor to the weak. These are acts of foolishness because the weak don’t deserve aid—they are fodder for the strong. Setting fertile fields ablaze and witnessing the resulting famine is a source of enjoyment for Mogis, though he has been surprised more than once by the ferocity of Karametra’s reprisals."
          ],
          expanded: false,
        },
        {
          title: "Known Followers",
          info: ["Svaratok The Endless King (Champion)"],
          expanded: false,
        },
      ],
    },
    {
      name: "Nylea",
      domain: "god of the hunt",
      img: "nylea.png",
      notes: [
        {
          title: "Goals",
          info: [
            "Compared to the other gods, Nylea’s goals are modest. She wants only to keep the natural world free and healthy, shepherd the seasons through their yearly cycle, and enjoy the beauty of the land. But in her darker moments, she realizes that the very existence of civilization on Theros is a mounting threat to nature—perhaps even an effort by the rest of the pantheon to destroy her. If it were up to her, she might well wipe away all the poleis and larger communities, leaving only scattered tribes of mortals to live in an enforced balance with nature. She isn’t out to eradicate sapient beings, blaming her fellow gods for the spread of civilization rather than the mortals themselves.",
          ],
          expanded: false,
        },
        {
          title: "Divine Relationships",
          info: [
            "Heliod and Ephara: Nylea seldom comes into open conflict with the other gods, and she would say that all her clashes with them result from their encroachment on her territory. The most frequent targets of her irritation are the gods who encourage the spread of civilization. Heliod and Ephara brought law and ambition to mortals, persuading them to congregate in stone-walled cities and consider themselves separate from her realm.",
            "Purphoros: Purphoros oversees some of the natural processes of earth and fire that help Nylea’s realm flourish, but he also gave mortals the gift of bronze, enabling them to make axes and spears. In both his destructive and creative guises, Purphoros might threaten what Nylea holds dear. As a result, she remains wary of his designs.",
            "Karametra: Nylea is disappointed in Karametra, precisely because of the overlap in their spheres of influence. Karametra insists on transforming nature into a mockery of itself, yoking once-wild beasts and contorting plants through agriculture to feed the ever-swelling population centers.",
            "Iroas and Mogis: Iroas and Mogis are harbingers of warfare, which is always devastating to the natural world. Nylea is virtually incapable of distinguishing between the “noble” and “brutal” aspects of their shared bailiwick, considering all forms of war a senseless waste of life and energy.",
            "Athreos, Erebos and Phenax: Nylea acknowledges death as a crucial part of the life cycle, but scorns Erebos’s obsession with the afterlife. What matters is that nature takes nourishment from the bodies of the deceased, not from the disposition of their intangible souls. She blames Erebos, Athreos, and Phenax in equal measure for the existence of the Returned, which she considers abominations."
          ],
          expanded: false,
        },
        {
          title: "Known Followers",
          info: ["Matthias (Champion)"],
          expanded: false,
        },
      ],
    },
    {
      name: "Pharika",
      domain: "god of affliction",
      img: "pharika.png",
      notes: [
        {
          title: "Goals",
          info: [
            "To Pharika, Theros is an ongoing experiment and mortals are her agents in carrying it out. Rather than limit her knowledge to what her own insights yield, she revels in watching mortals decipher the world’s wisdom and unearth its hidden knowledge, and she delights in seeing each sage interpret their findings in novel ways. She is willing to do anything to perpetuate experimentation and discovery, even at the cost of turning her less devout followers into specimens.",
          ],
          expanded: false,
        },
        {
          title: "Divine Relationships",
          info: [
            "Despite her venomous reputation, Pharika has provided nearly every god with a cure or an otherwise essential tonic at a crucial moment. As a result, she’s rarely in outright conflict with her fellow gods, yet she’s always willing to jeopardize peace with her peers if it means indulging some audacious new experiment.",
            "Erebos and Athreos: The gods of the Underworld have cordial relations with Pharika. She and Athreos enjoy each other’s silent company, and Erebos appreciates her agenda, which ultimately bolsters his realm. Pharika rankles somewhat at the attention Erebos gets from dying mortals, chafing at their tendency to appeal to him when they could beg her for healing or for a painless death.",
            "Ephara and Karametra: Pharika and the gods of civilization cautiously maneuver around one another’s territory, with Ephara and Karametra recognizing Pharika’s medicinal virtues, and she is always seeking subtle ways to use city-states in her experiments without provoking her peers. She disdains Ephara’s and Karametra’s desire to tame the world rather than understand it.",
            "Keranos and Kruphix: Pharika has her most complex relationships with the gods of knowledge. Pharika loathes that Keranos gifts wisdom to the undeserving, while Kruphix represents mysteries even she has yet to fathom.",
            "Nylea: No god is more precious to Pharika than Nylea. She adores Nylea as the source of nature’s abundant bounty and delights in Nylea’s warmth. Anyone who threatens or offends Nylea is likely to also earn Pharika’s enmity."
          ],
          expanded: false,
        },
        {
          title: "Known Followers",
          info: ["Nestor (Test Subject)"],
          expanded: false,
        },
      ],
    },
    {
      name: "Phenax",
      domain: "god of deception",
      img: "phenax.png",
      notes: [
        {
          title: "Goals",
          info: [
            "Phenax doesn’t want to rule Nyx. He is the perennial outsider, existing only to disrupt the plans of his fellow gods. Every lie, every betrayal, delights him as it sows discord in the world. He respects a well-planned and executed grift or heist, sometimes rewarding able followers with opportunities to serve as his champions.",
            "As the metaphorical progenitor of the Returned, Phenax also takes time to provide shelter and opportunities for his children to disrupt the mortal world."
          ],
          expanded: false,
        },
        {
          title: "Divine Relationships",
          info: [
            "It stands to reason that the god of secrets, deception, and betrayal isn’t close with the rest of the pantheon. This is not to say that Phenax doesn’t have active relationships with others in the pantheon, but his position as the patron of lies doesn’t lead to close, lasting friendships.",
            "Erebos and Athreos: Erebos and Athreos despise Phenax, which delights him to no end. Phenax revels in the fact that, as a lowly mortal, he was able to outwit both the Lord of the Underworld and the River Guide. Still bitter over Phenax’s deception, Erebos concocts ways to torment the upstart god. Were he to discover a method to slay Phenax and return him to the Underworld, the god of the dead would pursue it over all other goals.",
            "Heliod and Iroas: Phenax finds Heliod and Iroas overbearing and insufferable. Both represent ideologies diametrically opposed to Phenax’s, and both have followers who regularly try to foil his schemes. In turn, Phenax does his best to upend their plans through lies and deception. After all, a fair fight isn’t worth fighting.",
            "Xenagos: Nowhere is Phenax’s commitment to upending the status quo and angering his fellow gods more evident than in his role in the rise of Xenagos, the now destroyed god of revels. Xenagos’s attacks left many of the gods disconnected from their followers, inciting a panic in Nyx. Phenax, basking in the chaos of Xenagos’s plot, found myriad ways to covertly aid him until the satyr’s apotheosis. Helping another mortal ascend to godhood was, to Phenax, the ultimate subversion of authority."
          ],
          expanded: false,
        },
        {
          title: "Known Followers",
          info: ["Bonassus (Champion)"],
          expanded: false,
        },
      ],
    },
    {
      name: "Purphoros",
      domain: "god of the forge",
      img: "purphoros.png",
      notes: [
        {
          title: "Goals",
          info: [
            "Purphoros acts not because of grand plans or high ideals, but on the whims of his restless, creative mind. On the rare occasions when he contemplates what he would do if he were ascendant in the pantheon, his most fervent wish is to be left alone. To Purphoros, that would mean spending time by himself in his forge, creating anything he desires. But it also would mean being free to uproot mountains, topple cities, and reroute rivers without any of the other gods interfering."
          ],
          expanded: false,
        },
        {
          title: "Divine Relationships",
          info: [
            "Purphoros has few strong relationships with his fellow gods, considering most of them arrogant ingrates. According to legend, it was he who created the weapons of the gods, asking nothing in return. But his infrequent though memorable bouts of destructive fury have earned him more ill will in the pantheon than he realizes.",
            "Heliod: Heliod despises Purphoros’s unpredictable impulses even as he envies the forge god’s ability to create grand works. Purphoros resents Heliod’s attempts to impose laws that constrain the passion of creation. In many ways, the two gods represent opposing approaches to the contradictions and challenges of mortal life, and they have more than once fought titanic battles in Nyx.",
            "Thassa: Thassa is Purphoros’s closest ally in the pantheon. Imbued as she is with the malleable, quenching power of water, she knows that he can neither destroy her waves nor reforge them. Because she has no fear of him, she treats him as a friend. Purphoros frequently makes wondrous gifts for Thassa, and her underwater palace holds countless unique creations of the god of the forge.",
            "Kruphix: Purphoros holds Kruphix in contempt for hobbling his mind after he engaged in a particularly destructive battle with Heliod. The forge god spent years addled and incomplete. He has since recovered his faculties, but he mourns the things he might have made during that lost time. Taking revenge on Kruphix would require careful planning, however, and Purphoros is unlikely to undertake such an effort unless another god goads him into it.",
            "Ephara and Karametra: Ephara and Karametra are, like Purphoros, deeply involved in the project of civilization. Purphoros’s desire to overturn the established order with violence stands in stark contrast to their measured ways. As a result, Purphoros stands aloof from them."
          ],
          expanded: false,
        },
        {
          title: "Known Followers",
          info: ["None"],
          expanded: false,
        },
      ],
    },
    {
      name: "Thassa",
      domain: "god of the sea",
      img: "thassa.png",
      notes: [
        {
          title: "Goals",
          info: [
            "Thassa is never satisfied with the status quo, and she also never advocates hasty, uncontrolled change. She constantly resculpts the physical world, altering coastlines and upending familiar trade routes. There is no ultimate goal to this ongoing transformation; the purpose is change itself. Thassa believes that change is essential to existence, and she opposes anyone who tries to establish or maintain a permanent order to the universe. She aids and inspires forces of change, the rivers that wear down mountains and the tides that claim whole continents. She sometimes seems disinterested in the intrigues of the present, even in her own current schemes, as her thoughts drift toward what the future holds."
          ],
          expanded: false,
        },
        {
          title: "Divine Relationships",
          info: [
            "Thassa disdains the shortsightedness of her fellow gods, most of whom have convinced themselves that they can impose lasting order on the cosmos. At the same time, her realm is unassailable, and she believes that the changes she advocates are inevitable in the long term. So although Thassa frequently disagrees with the other gods, she doesn’t fear them.",
            "Heliod: Heliod considers Thassa his favorite sibling, despite her unwillingness to agree with his plan for a permanent order. Thassa, who rules depths that have never seen the sun, considers most of Heliod’s schemes pointless and opposes them if they seem to threaten harm.",
            "Purphoros: Thassa took pity on Purphoros and aided him when Kruphix hobbled his mind, and Purphoros has not forgotten it. The two of them agree that old things must make way for new things, but Purphoros’s bursts of destructive energy stand in sharp opposition to Thassa’s gradual alterations. Purphoros regularly makes gifts for Thassa, most recently gifting her a new spear to replace her lost weapon.",
            "Thassa has little use for the gods who oversee work she believes best left to mortals: Ephara with her cities, Karametra with her fields, Pharika with her tinctures, Mogis and Iroas with their armies. To Thassa’s mind, her peers are building castles in the sand, unaware or unmindful that the tide will sweep them away."
          ],
          expanded: false,
        },
        {
          title: "Known Followers",
          info: ["Brutus Olantopoulos"],
          expanded: false,
        },
      ],
    }
  ]

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this._god = this.gods.filter(god => god.name === params['god'])[0];
    })
  }

  get god() { return this._god }

  onExpand(i: number) {
    this.god.notes[i].expanded = !this.god.notes[i].expanded;
  }

}
