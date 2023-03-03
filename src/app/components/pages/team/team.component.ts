import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

    bioActive: boolean = false;
    bio: String = "";
    memberSelected: String = "";
    constructor() { }

    ngOnInit(): void {
    }

    showBio(member: String) {
        console.log("member: "+ member);
        console.log("memberSelected: "+ this.memberSelected);

        this.bioActive = ((this.memberSelected == member) && !(this.memberSelected == "")) ? false : true;
        if (this.bioActive == true) {
            this.memberSelected = member;
            switch(member) {
                case 'frigo': {
                    this.bio = "Paolo Montesi, aka <b>FRIGO</b> is a dancer, choreographer, DJ and producer. <br/>"
                        + " Founder and artistic director of Pavimento Fertile, he began his journey in 1995 in Senigallia (Italy) and since then, the passion, the desire to learn and the need to express himself have prompted him to grow and connect within the international Hip Hop panorama."
                        + " In this adventure, the love of music is his guide and the search for emotions his destination."
                        + " As a dancer and judge he participated in national and international events in Europe, United States and Africa."
                        + " As DJ and music curator he brings his music selection and research in bars, dance events and clubs."
                        + " As a dance teacher, in 2004 he founded Stile Balneare, one of the first Italian schools entirely dedicated t o the teaching of breakdance and Hip Hop arts and as event producer he gave life to many projects like: Pavimento Fertile Jam Session, The bridge: connecting urban arts worldwide, Senigallia Hip Hop Festival."
                    break;
                }
                case 'collo': {
                    this.bio = "Davide Del Gaia aka <b>COLLO</b> approaches hip hop culture in the year 2000 with a particular propensity for breaking. After a few years, he began to travel both in Italy and abroad in search of everything he needed to learn more and experience this culture from within."
                        + " The backbone is the passion for music which, in addition to guiding him in the study of styles: locking, hip hop, popping and house, also leads him to delve into the roots of black music."
                        + " By collecting records during his travels, the desire to undertake the discipline of DJing grows, which will become an integral part of his artistic life."
                        + " As an active member of groups Funkastle, Pavimento Fertile and Ordinary Dancers, he takes part in events in Italy and abroad as a judge, performer or DJ."
                        + " In his hometown Città di Castello he carries out multiple projects especially in dance schools where he offers a technical and cultural teaching program of the hip hop movement."
                    break;
                }
                case 'rob': {
                    this.bio = "Roberto Del Gaia aka <b>ROB MYSTIC</b> is a member of the board of directors of Funkastle, a non-profit organization that promotes Hip Hop culture and Hip Hop dance styles since 2010."
                        + " He works as a breakdance teacher and he takes care of different activities like workshops, school projects, cultural activities, summer dance camps and shows."
                        + " Together with the discipline of breaking, he cultivates the passion for graffiti art and street art by participating in redevelopment projects of urban spaces and commissioned works."
                        + " As a member of the groups Funkastle and Pavimento Fertile, he is active in the Hip Hop panorama as a dancer, graffiti writer, DJ."
                    break;
                }
                case 'buzz': {
                    this.bio = "Renato Scapecchi aka <b>BUZZ</b> is a dancer and teacher of Breaking."
                        + " Member of the Hip Hop international underground scene since the mid 90', he participated as a guest at the most important events in Europe (Switzerland, France, Germany, Austria, Belgium, Poland, Slovenia, Norway, England)."
                        + "President of the crew <b>Licence to Chill</b> and member of Pavimento Fertile collective, he has collaborated with artists of different genres: musicians, singers, actors and choreographers in live performances, video clips and theatre shows (Esa, Tormento, Primo, Giorgia, Carlo Monni, Luca Tommasini, Giorgio Mancini)."
                    break;
                }
            }
        } else {
            this.memberSelected = "";
        }
    }

}
