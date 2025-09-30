const achievements = [
    {
        id: 'legend',
        title: 'Legend of the West',
        desc: "You've become a true legend of the West!",
        trophy: 'Platinum',
        category: 'platinum',
        image: 'legend.png',
        isPlatinum: true
    },
    {
        id: 'gov_boy',
        title: 'That Government Boy',
        desc: 'Complete "Exodus in America".',
        trophy: 'Bronze',
        category: 'story',
        image: 'gov_boy.png'
    },
    {
        id: 'land_opp',
        title: 'Land of Opportunity',
        desc: 'Complete "The Assault on Fort Mercer".',
        trophy: 'Bronze',
        category: 'story',
        image: 'land_opp.png'
    },
    {
        id: 'sons_mex',
        title: 'Sons of Mexico',
        desc: 'Complete "The Gates of El Presidio".',
        trophy: 'Bronze',
        category: 'story',
        image: 'sons_mex.png'
    },
    {
        id: 'no_fancy',
        title: 'No More Fancy Words',
        desc: 'Complete "An Appointed Time".',
        trophy: 'Bronze',
        category: 'story',
        image: 'no_fancy.png'
    },
    {
        id: 'savage',
        title: 'A Savage Soul',
        desc: 'Complete "At Home with Dutch".',
        trophy: 'Bronze',
        category: 'story',
        image: 'savage.png'
    },
    {
        id: 'benefits',
        title: 'The Benefits of Civilization',
        desc: 'Complete "And the Truth Will Set You Free".',
        trophy: 'Bronze',
        category: 'story',
        image: 'benefits.png'
    },
    {
        id: 'sunset',
        title: 'Into the Sunset',
        desc: 'Complete "The Last Enemy That Shall Be Destroyed".',
        trophy: 'Bronze',
        category: 'story',
        image: 'sunset.png'
    },
    {
        id: 'nurture',
        title: 'Nurture or Nature?',
        desc: 'Complete "Remember My Family".',
        trophy: 'Gold',
        category: 'story',
        image: 'nurture.png'
    },
    {
        id: 'high_roller',
        title: 'High Roller',
        desc: 'Win over 2000 chips in a hand of Poker.',
        trophy: 'Bronze',
        category: 'gambling',
        image: 'high_roller.png'
    },
    {
        id: 'no_dice',
        title: 'No Dice',
        desc: "Complete a game of Liar's Dice without losing a single die.",
        trophy: 'Bronze',
        category: 'gambling',
        image: 'no_dice.png'
    },
    {
        id: 'horseshoes',
        title: 'What About Hand Grenades?',
        desc: 'Get a ringer in a game of Horseshoes.',
        trophy: 'Bronze',
        category: 'gambling',
        image: 'horseshoes.png'
    },
    {
        id: 'austin',
        title: 'Austin Overpowered',
        desc: 'Complete Twin Rocks, Pike\'s Basin, and Gaptooth Breach Hideouts.',
        trophy: 'Bronze',
        category: 'hideouts',
        image: 'austin.png',
        subTasks: [
            "Pike's Basin",
            'Twin Rocks',
            'Gaptooth Breach'
        ],
        collapsible: true,
        guide: {
            intro: 'You will get this trophy on your journey to 100% completion of the single-player game.',
            steps: [
                "<strong>Pike's Basin</strong> - Slightly Left of MacFarlanes Ranch, or North East of Armadillo. Can be accessed after completing 'Justice In Pike's Basin.'",
                "<strong>Twin Rocks</strong> - North West of Armadillo, or East of Rathskeller Fork. Can be accessed after completing 'New Friends, Old Problems'.",
                "<strong>Gaptooth Breach</strong> - South of Rathskeller Fork, East of Plainview. Can be accessed after completing 'Man Is Born unto Trouble.'"
            ]
        }
    },
    {
        id: 'evil',
        title: 'Evil Spirits',
        desc: 'Complete Tumbleweed and Tesoro Azul Hideouts.',
        trophy: 'Bronze',
        category: 'hideouts',
        image: 'evil.png',
        subTasks: [
            'Tumbleweed',
            'Tesoro Azul'
        ],
        collapsible: true,
        guide: {
            intro: 'You will get this trophy on your journey to 100% completion of the single-player game.',
            steps: [
                "<strong>Tumbleweed</strong> - South East of Rathskeller Fork, or North West of Plainview. Can be accessed after completing 'New Friends, Old Problems'.",
                "<strong>Tesoro Azul</strong> - South West of Chuparosa, where you obtain Molotovs in the story. Can be accessed after completing 'The Demon Drink'."
            ]
        }
    },
    {
        id: 'instinto',
        title: 'Instinto Asesino',
        desc: 'Complete Fort Mercer and Nosalida Hideouts.',
        trophy: 'Bronze',
        category: 'hideouts',
        image: 'instinto.png',
        subTasks: [
            'Fort Mercer',
            'Nosalida'
        ],
        collapsible: true,
        guide: {
            intro: 'You will get this trophy on your journey to 100% completion of the single-player game. Both hideouts are unlocked very near the end of the game, after completing "We Shall Be Together In Paradise."',
            steps: [
                "<strong>Fort Mercer</strong> - You should know where this is, as you go there multiple times in the game's story. It's located in Rio Bravo.",
                "<strong>Nosalida</strong> - North of Escalera (and slightly West). It's at the top-left corner of Mexico."
            ]
        }
    },
    {
        id: 'fightin',
        title: "Fightin' Around the World",
        desc: 'Knock someone out in melee in every saloon in the game.',
        trophy: 'Bronze',
        category: 'combat',
        image: 'fightin.png',
        subTasks: [
            'Armadillo Saloon',
            'Blackwater Saloon',
            'Chuparosa Cantina',
            'Escalera Saloon',
            "MacFarlane's Ranch Saloon",
            "Thieves' Landing Saloon",
            'Torquemada Saloon',
            'Rathskeller Fork Saloon'
        ],
        collapsible: true,
        guide: {
            intro: "For this trophy, you need to knock someone out with your fists in every saloon in the game. It's very easy to knock someone out, but make sure not to get ganged up on.",
            steps: [
                '<strong>Armadillo</strong> - Located in New Austin.',
                '<strong>Rathskeller Fork</strong> - Located in New Austin.',
                "<strong>Thieves' Landing</strong> - Located in New Austin. (Wear a bandanna or gang outfit if you have high honour, as they will just shoot you otherwise)",
                '<strong>Escalera</strong> - Located in Mexico.',
                '<strong>Chuparosa</strong> - Located in Mexico.',
                '<strong>Casa Madrugada</strong> - Located in Mexico.',
                '<strong>Blackwater</strong> - Located in West Elizabeth.'
            ]
        }
    },
    {
        id: 'strange',
        title: 'Strange Things are Afoot',
        desc: 'Complete a task for a Stranger.',
        trophy: 'Bronze',
        category: 'strangers',
        image: 'strange.png'
    },
    {
        id: 'still_strange',
        title: 'People are Still Strange',
        desc: 'Complete 15 tasks for Strangers.',
        trophy: 'Silver',
        category: 'strangers',
        image: 'still_strange.png'
    },
    {
        id: 'buckin',
        title: "Buckin' Awesome",
        desc: 'Break the Kentucky Saddler, the American Standardbred, and the Hungarian Half-bred.',
        trophy: 'Bronze',
        category: 'misc',
        image: 'buckin.png',
        subTasks: [
            'Kentucky Saddler',
            'American Standardbred',
            'Hungarian Half-bred'
        ],
        collapsible: true,
        guide: {
            intro: 'For this trophy, you must "break" (tame) three horses. These are the following locations/requirements:',
            steps: [
                '<strong>Kentucky Saddler</strong> - Golden Horse broken in the story. Can usually be found in the MacFarlane\'s Ranch pen. Also found in the area west of Pike\'s Basin.',
                '<strong>American Standardbred</strong> - Black Horse, very recognizable, especially during day time. Can be found near Beecher\'s Hope, and the Great Plains (locked until completion of the Mexico storyline).',
                '<strong>Hungarian Half Bred</strong> - Required for Heading South on a White Bronco. Can be found in Eastern Mexico, in the Diez Coronas area. Like the American Standardbred, it\'s instantly recognizable, night and day alike.'
            ],
            note: '<strong>Important:</strong> If the trophy doesn\'t unlock, break Kentucky Saddler again, for some reason it may not register the first time.'
        }
    },
    {
        id: 'clemency',
        title: 'Clemency Pays',
        desc: 'Capture a bounty alive.',
        trophy: 'Bronze',
        category: 'misc',
        image: 'clemency.png'
    },
    {
        id: 'dastardly',
        title: 'Dastardly',
        desc: 'Place a hogtied woman on the train tracks, and witness her death by train.',
        trophy: 'Bronze',
        category: 'misc',
        image: 'dastardly.png'
    },
    {
        id: 'taste',
        title: 'Exquisite Taste',
        desc: 'Purchase a rare weapon from a gunsmith.',
        trophy: 'Bronze',
        category: 'misc',
        image: 'taste.png',
        guide: {
            intro: 'You will get this trophy on your journey to 100% completion of the single-player game. There are 5 rare weapons in the game. While they are expensive, you only need one for the trophy. You can buy rare weapons from the Gunsmith in Blackwater and Escalera.',
            steps: [
                '<strong>Mauser Pistol ($800)</strong> - Located in Blackwater.',
                '<strong>Evans Repeater ($1,000)</strong> - Located in Blackwater.',
                '<strong>Carcano Rifle ($1,100)</strong> - Located in Blackwater.',
                '<strong>Semi Automatic Shotgun ($1,000)</strong> - Located in Escalera.',
                '<strong>LeMat Revolver ($1,250)</strong> - Located in Escalera.'
            ],
            note: 'If you have High Honour, these prices will be halved. However, if you have low honour, these prices will be increased by x1.5. For example, the Semi-Auto Shotgun will be $1,500 if you have low honour.'
        }
    },
    {
        id: 'bearly',
        title: 'Bearly Legal',
        desc: 'Kill and skin 18 grizzly bears.',
        trophy: 'Bronze',
        category: 'hunting',
        image: 'bearly.png',
        progress: { current: 0, max: 18 },
        guide: {
            intro: 'For this trophy you need to kill and then skin 18 bears. Bears spawn in infinite numbers, but are mainly found at Tall Trees, an area unlocked after you complete the Mexico story missions.',
            steps: [
                "Bearclaw camp usually has around 5 bears in its radius (especially when hunting 'Lobo' the legendary Bear), and you'll encounter 2 during the story.",
                'Just ride around Tall Trees searching for them. Bears can kill you in two hits, so use dead eye and aim for the head.',
                'Be wary when skinning them though, as there could be more nearby.'
            ]
        }
    },
    {
        id: 'elegant',
        title: 'He Cleans Up Well!',
        desc: 'Obtain the Elegant Suit.',
        trophy: 'Bronze',
        category: 'misc',
        image: 'elegant.png'
    },
    {
        id: 'fistful',
        title: 'More than a Fistful',
        desc: 'Earn $10,000.',
        trophy: 'Bronze',
        category: 'misc',
        image: 'fistful.png',
        guide: {
            intro: "This trophy is pretty easy, you'll get loads of money from the Treasure Hunter Ranks (Nearly $4,000), and capturing Bounties alive.",
            steps: [
                "After getting 100% single-player completion, if for some strange reason you still don't have this trophy, you can grind Five Finger Fillet at $100 bets."
            ]
        }
    },
    {
        id: 'frontiersman',
        title: 'Frontiersman',
        desc: 'Obtain Legendary rank in any Ambient Challenge.',
        trophy: 'Silver',
        category: 'challenges',
        image: 'frontiersman.png'
    },
    {
        id: 'gunslinger',
        title: 'The Gunslinger',
        desc: 'Score a headshot on any enemy using Expert targeting mode.',
        trophy: 'Bronze',
        category: 'combat',
        image: 'gunslinger.png'
    },
    {
        id: 'honor',
        title: 'Man of Honor / Chivalry\'s Dead',
        desc: 'Attain highest Fame rank and either highest Honor rank or lowest Honor rank.',
        trophy: 'Bronze',
        category: 'misc',
        image: 'honor.png'
    },
    {
        id: 'gold_medal',
        title: 'Gold Medal',
        desc: 'Earn a Gold Medal Rank for a combat mission.',
        trophy: 'Bronze',
        category: 'combat',
        image: 'gold_medal.png',
        guide: {
            intro: "The easiest mission to get this trophy in is 'Old Swindler Blues'. Gold Medals are determined by time, accuracy, and headshots.",
            steps: [
                'In the aforementioned mission, there will be five enemies, and the mission will be over in 2 minutes.',
                "Enter dead eye, and don't fire unless you have a headshot.",
                'You can replay missions in the Stats menu.'
            ]
        }
    },
    {
        id: 'manifest',
        title: 'Manifest Destiny',
        desc: 'Kill the last buffalo in the Great Plains.',
        trophy: 'Bronze',
        category: 'hunting',
        image: 'manifest.png',
        guide: {
            intro: 'Buffalo have a finite number in Red Dead Redemption. They all appear in a herd of 20 directly west of Blackwater (An area that\'s locked until after the Mexico story missions).',
            steps: [
                "Chances are you won't get them all in one attempt, as they flee in different directions, but luckily, they don't respawn, so kill every one you see.",
                'When you obtain this trophy, you also unlock the extremely powerful Buffalo Rifle in the Blackwater Gun store.'
            ]
        }
    },
    {
        id: 'de_vaca',
        title: 'On the Trail of de Vaca',
        desc: 'Uncover every location on the map.',
        trophy: 'Bronze',
        category: 'exploration',
        image: 'de_vaca.png'
    },
    {
        id: 'high_places',
        title: 'Friends in High Places',
        desc: 'Use a pardon letter with more than $5000 bounty.',
        trophy: 'Bronze',
        category: 'misc',
        image: 'high_places.png',
        guide: {
            intro: 'This achievement requires you to use a Pardon Letter when you have over $5,000 in bounty.',
            videoId: 'dQw4w9WgXcQ',
            note: 'Replace the videoId above with the actual YouTube video ID for your guide video.'
        }
    },
    {
        id: 'redeemed',
        title: 'Redeemed',
        desc: 'Attain 100% in the Game Completion stat.',
        trophy: 'Gold',
        category: 'completion',
        image: 'redeemed.png',
        hasDetailedChecklist: true
    },
    {
        id: 'spurred',
        title: 'Spurred to Victory',
        desc: 'Complete 20 story missions without switching to a new horse at a hitching post.',
        trophy: 'Bronze',
        category: 'story',
        image: 'spurred.png'
    },
    {
        id: 'white_bronco',
        title: 'Heading South on a White Bronco',
        desc: 'Evade the US Marshals while riding the Hungarian Half-Bred horse.',
        trophy: 'Bronze',
        category: 'misc',
        image: 'white_bronco.png',
        guide: {
            intro: 'It is recommended to attempt this trophy at the same time as Friends in High Places.',
            steps: [
                "Firstly, you'll need the Hungarian Half-Bred horse, which can be found in Mexico around the Diez Coronas area. It's very distinctive, and is all grey.",
                'When you get it, make sure to hitch it, so you actually own it (or buy the deed at a General store).',
                "Next, you need the U.S. Marshalls after you. You can get their attention after killing 20 sheriffs, so just go on a huge rampage, and kill everything in sight.",
                "The Marshalls are relentless, but can be easily escaped if you kill all but one. Once you've escaped, the trophy will unlock."
            ]
        }
    },
    {
        id: 'mowing',
        title: 'Mowing Them Down',
        desc: 'Kill 500 enemies with a mounted weapon in any game mode.',
        trophy: 'Bronze',
        category: 'combat',
        image: 'mowing.png',
    },
    {
        id: 'hail_bullets',
        title: 'In a Hail of Bullets',
        desc: 'Kill 500 enemies with any pistol or revolver in any game mode.',
        trophy: 'Bronze',
        category: 'combat',
        image: 'hail_bullets.png',
    },
    {
        id: 'long_arm',
        title: 'Long Arm of Marston',
        desc: 'Kill 500 enemies with any rifle, repeater, or shotgun in any game mode.',
        trophy: 'Bronze',
        category: 'combat',
        image: 'long_arm.png',
    },
    {
        id: 'bullseye',
        title: 'Bullseye',
        desc: 'Get 250 headshots in any game mode.',
        trophy: 'Bronze',
        category: 'combat',
        image: 'bullseye.png',
    },
    {
        id: 'unnatural',
        title: 'Unnatural Selection',
        desc: 'Kill one of every animal species in the game in any game mode.',
        trophy: 'Bronze',
        category: 'hunting',
        image: 'unnatural.png',
        subTasks: [
            'Armadillo', 'Beaver', 'Bighorn', 'Buffalo', 'Bobcat', 'Boar',
            'Coyote', 'Cougar', 'Crow', 'Deer', 'Duck', 'Eagle', 'Elk',
            'Fox', 'Bear', 'Hawk', 'Horse (Wild)', 'Horse (Tamed)', 'Owl',
            'Raccoon', 'Rabbit', 'Seagull', 'Songbird', 'Skunk', 'Snake',
            'Vulture', 'Wolf', 'Bat'
        ],
        collapsible: true
    },
    {
        id: 'axe',
        title: 'Axe Master',
        desc: 'Complete all Tomahawk challenges.',
        trophy: 'Bronze',
        category: 'challenges',
        image: 'axe.png',
        subTasks: [
            'Kill 5 coyotes',
            'Kill 5 wolves',
            'Kill 5 cougars',
            'Kill 5 grizzly bears',
            'Kill 5 flying birds',
            'Disarm 5 opponents',
            'Kill 5 enemies',
            'Kill 10 enemies'
        ],
        collapsible: true
    },
    {
        id: 'exploder',
        title: 'Master Exploder',
        desc: 'Complete the Explosive Rifle Challenge.',
        trophy: 'Bronze',
        category: 'challenges',
        image: 'exploder.png'
    },
    {
        id: 'downward',
        title: 'The Downward Spiral',
        desc: 'Complete "Curious Tales from Blackwater, USA" Survivor Mission.',
        trophy: 'Bronze',
        category: 'survivor',
        image: 'downward.png'
    },
    {
        id: 'judge',
        title: 'Judge A Man By The…',
        desc: 'Complete "Cure For Most of What Ails You" and "Get Back in that Hole, Partner" Survivor Missions.',
        trophy: 'Bronze',
        category: 'survivor',
        image: 'judge.png',
        subTasks: [
            'Cure For Most of What Ails You',
            'Get Back in that Hole, Partner'
        ],
        collapsible: true
    },
    {
        id: 'superior',
        title: 'The Superior Dance',
        desc: 'Complete "Mother Superior Blues Survivor Mission".',
        trophy: 'Bronze',
        category: 'survivor',
        image: 'superior.png'
    },
    {
        id: 'pale_horse',
        title: "All's Right With the World",
        desc: 'Complete "On a Pale Horse".',
        trophy: 'Silver',
        category: 'undead',
        image: 'pale_horse.png'
    },
    {
        id: 'spinning',
        title: 'Spinning Plates',
        desc: 'Have every territory saved at the same time during the Undead Nightmare.',
        trophy: 'Silver',
        category: 'undead',
        image: 'spinning.png'
    },
    {
        id: 'zeds_dead',
        title: "Zed's Dead, Baby",
        desc: 'Attain 100% Game Completion statistic in Undead Nightmare.',
        trophy: 'Gold',
        category: 'undead',
        image: 'zeds_dead.png'
    },
    {
        id: 'mad_marston',
        title: 'Mad Marston: The Trail Warrior',
        desc: 'Attain Rank 5 in all Undead Nightmare Challenges.',
        trophy: 'Bronze',
        category: 'undead',
        image: 'mad_marston.png'
    },
    {
        id: 'fan_service',
        title: 'Fan Service',
        desc: 'Find and break a unicorn.',
        trophy: 'Bronze',
        category: 'undead',
        image: 'fan_service.png'
    },
    {
        id: 'chupa',
        title: 'Chupathingy',
        desc: 'Find and kill a chupacabra.',
        trophy: 'Bronze',
        category: 'undead',
        image: 'chupa.png'
    },
    {
        id: 'sasquatch',
        title: 'Six Years In The Making',
        desc: 'Find and kill a sasquatch.',
        trophy: 'Bronze',
        category: 'undead',
        image: 'sasquatch.png'
    }
];

const categories = [
    { id: 'all', name: 'All', icon: '🏆' },
    { id: 'platinum', name: 'Platinum', icon: '💎' },
    { id: 'story', name: 'Story', icon: '📖' },
    { id: 'combat', name: 'Combat', icon: '⚔️' },
    { id: 'hunting', name: 'Hunting', icon: '🎯' },
    { id: 'hideouts', name: 'Hideouts', icon: '🏴' },
    { id: 'gambling', name: 'Games', icon: '🎲' },
    { id: 'strangers', name: 'Strangers', icon: '👤' },
    { id: 'challenges', name: 'Challenges', icon: '🏅' },
    { id: 'survivor', name: 'Survivor', icon: '💀' },
    { id: 'undead', name: 'Undead', icon: '🧟' },
    { id: 'exploration', name: 'Explore', icon: '🗺️' },
    { id: 'completion', name: '100%', icon: '💯' },
    { id: 'misc', name: 'Misc', icon: '✨' }
];

let data = {};
let currentFilter = 'all';
let expandedGuides = {};
let collapsedSubTasks = {};

// Load data
function loadData() {
    const saved = window.localStorage.getItem('rdrAchievements');
    if (saved) {
        data = JSON.parse(saved);
    } else {
        achievements.forEach(a => {
            data[a.id] = {
                completed: false,
                progress: a.progress ? { ...a.progress } : null,
                subTasks: a.subTasks ? a.subTasks.reduce((acc, task) => ({ ...acc, [task]: false }), {}) : null
            };
        });
    }
    achievements.forEach(a => {
        if (a.collapsible) {
            collapsedSubTasks[a.id] = true; // Start collapsed
        }
    });
}

// Save data
function saveData() {
    window.localStorage.setItem('rdrAchievements', JSON.stringify(data));
    updateOverallProgress();
}

// Check platinum status
function checkPlatinumStatus() {
    const nonPlatinumAchievements = achievements.filter(a => !a.isPlatinum);
    const allCompleted = nonPlatinumAchievements.every(a => data[a.id].completed);

    if (allCompleted && !data['legend'].completed) {
        data['legend'].completed = true;
        saveData();
        renderAchievements();
    } else if (!allCompleted && data['legend'].completed) {
        data['legend'].completed = false;
        saveData();
        renderAchievements();
    }
}

// Initialize filters
function initFilters() {
    const container = document.getElementById('filterTabs');
    categories.forEach(cat => {
        const tab = document.createElement('div');
        tab.className = 'filter-tab' + (cat.id === 'all' ? ' active' : '');
        tab.textContent = `${cat.icon} ${cat.name}`;
        tab.onclick = () => filterAchievements(cat.id, tab);
        container.appendChild(tab);
    });
}

// Filter achievements
function filterAchievements(category, element) {
    currentFilter = category;
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    element.classList.add('active');
    renderAchievements();
}

// Render achievements
function renderAchievements() {
    const container = document.getElementById('achievementsContainer');
    container.innerHTML = '';

    const filtered = currentFilter === 'all'
        ? achievements
        : achievements.filter(a => a.category === currentFilter);

    filtered.forEach(achievement => {
        const card = createAchievementCard(achievement);
        container.appendChild(card);
    });
}

// Toggle sub-task list
function toggleSubTaskList(event, id) {
    event.stopPropagation();
    collapsedSubTasks[id] = !collapsedSubTasks[id];
    renderAchievements();
}

// Create achievement card
function createAchievementCard(achievement) {
    const card = document.createElement('div');
    card.className = 'achievement-card' + (data[achievement.id].completed ? ' completed' : '');

    if (achievement.isPlatinum) {
        card.classList.add('platinum');
    }

    let content = `
        <div class="achievement-header">
            <div class="achievement-icon">
                <img src="assets/${achievement.image}" alt="${achievement.title}" onerror="this.style.display='none'">
            </div>
            <div class="achievement-info">
                <div class="achievement-title">
                    ${achievement.title}
                    <span class="trophy-badge trophy-${achievement.trophy.toLowerCase()}">${achievement.trophy}</span>
                </div>
                <div class="achievement-desc">${achievement.desc}</div>
            </div>
                    ${!achievement.isPlatinum ? `
            <div class="checkbox-container">
                <span class="checkmark">✓</span>
            </div>
        ` : ''}
        </div>
    `;

    // Add progress tracker
    if (achievement.progress) {
        const prog = data[achievement.id].progress;
        const percentage = Math.round((prog.current / prog.max) * 100);
        content += `
            <div class="sub-tasks">
                <div class="sub-task-progress">
                    <span>Progress: ${prog.current} / ${prog.max}</span>
                    <span>${percentage}%</span>
                </div>
                <div class="sub-task-bar">
                    <div class="sub-task-bar-fill" style="width: ${percentage}%"></div>
                </div>
                <div class="number-input-container">
                    <input type="number" 
                        class="number-input" 
                        min="0" 
                        max="${prog.max}" 
                        value="${prog.current}"
                        onchange="updateProgress('${achievement.id}', this.value)"
                        onclick="event.stopPropagation()">
                </div>
            </div>
        `;
    }

    // Add sub-tasks
    if (achievement.subTasks) {
        const tasks = data[achievement.id].subTasks;
        const completed = Object.values(tasks).filter(Boolean).length;
        const total = achievement.subTasks.length;
        const percentage = Math.round((completed / total) * 100);
        const isCollapsed = collapsedSubTasks[achievement.id] && achievement.collapsible;

        content += `
            <div class="sub-tasks">
                <div class="sub-task-header">
                    <div class="sub-task-progress">
                        <span>Completed: ${completed} / ${total}</span>
                        <span>${percentage}%</span>
                    </div>
                    ${achievement.collapsible ? `
                        <button class="collapse-btn" onclick="toggleSubTaskList(event, '${achievement.id}')">
                            ${isCollapsed ? '▼ Show' : '▲ Hide'}
                        </button>
                    ` : ''}
                </div>
                <div class="sub-task-bar">
                    <div class="sub-task-bar-fill" style="width: ${percentage}%"></div>
                </div>
        `;

        if (!isCollapsed) {
            achievement.subTasks.forEach(task => {
                const taskCompleted = tasks[task] ? 'completed' : '';
                content += `
                    <div class="sub-task-item ${taskCompleted}" onclick="toggleSubTask(event, '${achievement.id}', '${task.replace(/'/g, "\\'")}')">
                        <div class="sub-task-checkbox">
                            <span class="checkmark">✓</span>
                        </div>
                        <div class="sub-task-text">${task}</div>
                    </div>
                `;
            });
        }

        content += `</div>`;
    }

    // Special handling for Redeemed achievement
    if (achievement.hasDetailedChecklist) {
        const redeemedProgress = getRedeemedProgress();
        content += `
        <div class="sub-tasks">
            <div class="sub-task-progress">
                <span>Checklist Progress: ${redeemedProgress.completed} / ${redeemedProgress.total}</span>
                <span>${redeemedProgress.percentage}%</span>
            </div>
            <div class="sub-task-bar">
                <div class="sub-task-bar-fill" style="width: ${redeemedProgress.percentage}%"></div>
            </div>
        </div>
        <button class="view-checklist-btn" onclick="openRedeemedChecklist(event)">
            📋 View 100% Completion Checklist
        </button>
    `;
    }

    // Add guide section
    if (achievement.guide) {
        const isExpanded = expandedGuides[achievement.id] || false;
        content += `
            <div class="guide-toggle" onclick="toggleGuide(event, '${achievement.id}')">
                <span class="guide-toggle-icon">${isExpanded ? '▼' : '▶'}</span>
                <span class="guide-toggle-text">Achievement Guide</span>
            </div>
        `;

        if (isExpanded) {
            content += `<div class="guide-section" id="guide-${achievement.id}">`;

            if (achievement.guide.intro) {
                content += `<p class="guide-text">${achievement.guide.intro}</p>`;
            }

            if (achievement.guide.steps) {
                content += '<div class="guide-steps">';
                achievement.guide.steps.forEach((step, index) => {
                    content += `<div class="guide-step">
                        <span class="guide-step-number">${index + 1}</span>
                        <span class="guide-step-text">${step}</span>
                    </div>`;
                });
                content += '</div>';
            }

            if (achievement.guide.note) {
                content += `<div class="guide-note">${achievement.guide.note}</div>`;
            }

            if (achievement.guide.videoId) {
                content += `
                    <div class="guide-video">
                        <iframe 
                            src="https://www.youtube.com/embed/${achievement.guide.videoId}" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                `;
            }

            content += `</div>`;
        }
    }

    card.innerHTML = content;

    // Click handler
    if (!achievement.isPlatinum && !achievement.hasDetailedChecklist) {
        card.onclick = (e) => {
            if (!e.target.closest('.number-input') &&
                !e.target.closest('.sub-task-item') &&
                !e.target.closest('.guide-toggle') &&
                !e.target.closest('.guide-section') &&
                !e.target.closest('.collapse-btn')) {
                toggleAchievement(achievement.id);
            }
        };
    }

    return card;
}

// Toggle guide visibility
function toggleGuide(event, id) {
    event.stopPropagation();
    expandedGuides[id] = !expandedGuides[id];
    renderAchievements();
}

// Toggle achievement
function toggleAchievement(id) {
    const achievement = achievements.find(a => a.id === id);
    data[id].completed = !data[id].completed;

    // If achievement has sub-tasks, sync them with the main checkbox
    if (achievement.subTasks && data[id].subTasks) {
        const newState = data[id].completed;
        Object.keys(data[id].subTasks).forEach(task => {
            data[id].subTasks[task] = newState;
        });
    }

    // If achievement has progress, sync it
    if (achievement.progress && data[id].progress) {
        if (data[id].completed) {
            data[id].progress.current = data[id].progress.max;
        } else {
            data[id].progress.current = 0;
        }
    }

    saveData();
    renderAchievements();
    checkPlatinumStatus();
}
// Toggle sub-task
function toggleSubTask(event, achievementId, taskName) {
    event.stopPropagation();
    data[achievementId].subTasks[taskName] = !data[achievementId].subTasks[taskName];

    const allCompleted = Object.values(data[achievementId].subTasks).every(Boolean);
    const anyCompleted = Object.values(data[achievementId].subTasks).some(Boolean);

    if (allCompleted) {
        data[achievementId].completed = true;
    } else if (!anyCompleted) {
        // Only uncheck main achievement if NO sub-tasks are checked
        data[achievementId].completed = false;
    }

    saveData();
    renderAchievements();
    checkPlatinumStatus();
}

// Update progress
function updateProgress(id, value) {
    const achievement = achievements.find(a => a.id === id);
    const numValue = Math.min(Math.max(0, parseInt(value) || 0), achievement.progress.max);
    data[id].progress.current = numValue;

    if (numValue >= achievement.progress.max) {
        data[id].completed = true;
    } else if (data[id].completed && numValue < achievement.progress.max) {
        data[id].completed = false;
    }

    saveData();
    renderAchievements();
    checkPlatinumStatus();
}

// Open Redeemed checklist modal
function openRedeemedChecklist(event) {
    event.stopPropagation();
    window.location.href = 'redeemed.html';
}
// Get Redeemed checklist progress
function getRedeemedProgress() {
    const saved = window.localStorage.getItem('rdrRedeemedProgress');
    if (!saved) {
        return { completed: 0, total: 0, percentage: 0 };
    }

    const progress = JSON.parse(saved);
    let totalItems = 0;
    let completedItems = 0;

    Object.keys(progress).forEach(sectionKey => {
        const section = progress[sectionKey];
        totalItems += Object.keys(section).length;
        completedItems += Object.values(section).filter(Boolean).length;
    });

    const percentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

    return { completed: completedItems, total: totalItems, percentage };
}
// Update overall progress
function updateOverallProgress() {
    const total = achievements.length;
    const completed = Object.values(data).filter(a => a.completed).length;
    const percentage = Math.round((completed / total) * 100);

    const progressBar = document.getElementById('mainProgress');
    const progressText = document.getElementById('mainProgressText');

    progressBar.style.width = percentage + '%';
    progressText.textContent = percentage + '%';

    document.getElementById('earnedCount').textContent = completed;
    document.getElementById('remainingCount').textContent = total - completed;

    const platinumAchieved = data['legend'].completed;
    document.getElementById('platinumStatus').textContent = platinumAchieved ? '✓' : '✗';
}

// Reset all
function resetAll() {
    if (confirm('Are you sure you want to reset ALL progress? This cannot be undone!')) {
        window.localStorage.removeItem('rdrAchievements');
        window.localStorage.removeItem('rdrRedeemedProgress');
        data = {};
        expandedGuides = {};
        collapsedSubTasks = {};
        achievements.forEach(a => {
            data[a.id] = {
                completed: false,
                progress: a.progress ? { ...a.progress } : null,
                subTasks: a.subTasks ? a.subTasks.reduce((acc, task) => ({ ...acc, [task]: false }), {}) : null
            };
        });
        saveData();
        renderAchievements();
    }
}

// Initialize
loadData();
initFilters();
renderAchievements();
updateOverallProgress();

// Service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then(registration => {
            console.log('ServiceWorker registered:', registration);
        }).catch(error => {
            console.log('ServiceWorker registration failed:', error);
        });
    });
}