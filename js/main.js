  
  <!-- CAPTCHA -->
  <script>
  function onClick(e) {
    e.preventDefault();
    grecaptcha.enterprise.ready(async () => {
      const token = await grecaptcha.enterprise.execute('6LcrIqkqAAAAAK2YCcpzyqn_pVRrObXVvCJ1FkVw', {action: 'LOGIN'});
    });
  }
</script>


    <!-- FADE EFFECT -->
    <script>
       document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const wrapper = document.getElementById("background-wrapper");

    function onScroll() {
        let scrollPos = window.scrollY + window.innerHeight / 2;

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                wrapper.style.backgroundColor = section.dataset.color;
                section.classList.add("fade-in");
            } else {
                section.classList.remove("fade-in");
            }
        });
    }

    window.addEventListener("scroll", onScroll);
});

</script>
<!-- PIE1 -->
<script>
     // Data for the pie chart
        const data = {
            labels: [
                'WordPress ★', 
                'Shopify ★', 
                'Wix', 
                'Squarespace', 
                'Joomla!', 
                'Drupal ★', 
                'Adobe Systems', 
                'Webflow ★'
            ],
            datasets: [{
                data: [62.9, 6.4, 3.8, 3.0, 2.4, 1.3, 1.2, 1.1],
                backgroundColor: [
                    '#7da0c9', // Muted blue
                    '#ffb57d', // Muted orange
                    '#d4a5db', // Muted purple
                    '#96d7c0', // Muted teal
                    '#f2cf66', // Muted yellow
                    '#c78585', // Muted red
                    '#a4c2d1', // Muted light blue
                    '#bfbfbf'  // Muted gray
                ],
                borderColor: '#000', // Black outline
                borderWidth: 1, // Thickness of the outline
                hoverOffset: 4
            }]
        };

        // Configuration for the pie chart
        const config = {
            type: 'pie',
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            font: {
                                size: 16
                            },
                            color: '#000000'
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.label || '';
                                if (label) {
                                    label += `: ${context.raw}%`;
                                }
                                return label;
                            }
                        }
                    }
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        };

        // Render the chart
        const ctx = document.getElementById('pieChart').getContext('2d');
        new Chart(ctx, config);
    </script>

    <!--TYPEWRITER EFFECT2 -->
    <script>
    document.addEventListener('DOMContentLoaded', function(event) {
    var dataText = ["Planning.", "Strategy.", "Design.", "Development.", "Implementation.", "Support.", "A One Stop Shop."];

    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            document.querySelector("h1").innerHTML = text.substring(0, i + 1) + '<span class="typey" aria-hidden="true"></span>';
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback);
            }, 100);
        } else if (typeof fnCallback === 'function') {
            setTimeout(fnCallback, 1500); // Pause before starting backspace
        }
    }

    function backspace(text, i, fnCallback) {
        if (i >= 0) {
            document.querySelector("h1").innerHTML = text.substring(0, i) + '<span class="typey" aria-hidden="true"></span>';
            setTimeout(function() {
                backspace(text, i - 1, fnCallback);
            }, 50);
        } else if (typeof fnCallback === 'function') {
            setTimeout(fnCallback, 600); // Pause before starting the next line
        }
    }

    function StartTextAnimation(i) {
        if (i < dataText.length) {
            typeWriter(dataText[i], 0, function() {
                backspace(dataText[i], dataText[i].length - 1, function() {
                    StartTextAnimation(i + 1);
                });
            });
        } else {
            setTimeout(function() {
                StartTextAnimation(0); // Restart the animation loop
            }, 1000); // Pause briefly before restarting
        }
    }

    // Start the text animation on page load
    StartTextAnimation(0);
});
</script>
<!-- ANOTHER PIE -->
<script>
document.addEventListener("DOMContentLoaded", () => {
            // Data for the pie chart
            const data = {
                labels: [
                    'JavaScript ★',  // Added star after JavaScript
                    'HTML5 / CSS3 ★', 
                    'Python ★', 
                    'SQL ★', 
                    'TypeScript ★', 
                    'Java', 
                    'Swift ★', 
                    'Rust', 
                    'PHP ★', 
                    'Ruby', 
                    'ASP.NET', 
                    'Static Files ★'
                ],
                datasets: [{
                    data: [
                        62.3, 
                        52.9, 
                        51.0, 
                        51.0, 
                        38.5, 
                        5.0, 
                        6.01, 
                        3.21, 
                        75.8, 
                        6.0, 
                        5.8, 
                        1.7
                    ],
                    backgroundColor: [
                        '#7da0c9', // Muted blue
                        '#ffb57d', // Muted orange
                        '#d4a5db', // Muted purple
                        '#96d7c0', // Muted teal
                        '#f2cf66', // Muted yellow
                        '#c78585', // Muted red
                        '#a4c2d1', // Muted light blue
                        '#bfbfbf', // Muted gray
                        '#81c784', // Muted green
                        '#ba68c8', // Muted magenta
                        '#f06292', // Muted pink
                        '#ffd54f'  // Muted gold
                    ],
                    borderColor: '#000', // Black border color for each slice
                    borderWidth: 1, // Border width of 2px
                    hoverOffset: 6
                }]
            };

            // Configuration for the pie chart
            const config = {
                type: 'pie',
                data: data,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                font: {
                                    size: 16
                                },
                                color: '000000'
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return `${context.label}: ${context.raw}%`;
                                }
                            }
                        }
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                }
            };

            // Render the chart
            const ctx = document.getElementById('pieChart2').getContext('2d');
            new Chart(ctx, config);
        });
    </script>
    <!-- Doughnut Indicator -->
    <script>
             document.addEventListener("DOMContentLoaded", () => {
            // Data for the doughnut chart
            const data = {
                labels: [
                    'Businesses with a website.', 
                    'Businesses planning to get a website.', 
                    'Businesses that believe websites are irrelevant.',
                    'Shoppers conduct online research.',
                    'Visitors want product/service info on homepage.',
                    'Consumers make online purchases weekly.',
                    
                ],
                datasets: [{
                    data: [
                        73, 23.5, 27, 81, 86, 40
                    ],
                    backgroundColor: [
                        '#7da0c9', // Muted blue
                        '#ffb57d', // Muted orange
                        '#d4a5db', // Muted purple
                        '#96d7c0', // Muted teal
                        '#f2cf66', // Muted yellow
                        '#c78585' // Muted red
                       
                    ],
                    borderColor: '#000', // Black border for each section
                    borderWidth: 1, // Border width of 2px
                    hoverOffset: 6
                }]
            };

            // Configuration for the doughnut chart
            const config = {
                type: 'doughnut',
                data: data,
                options: {
                    responsive: true,
                    maintainAspectRatio: false, /* Ensure it doesn't get cut off */
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                font: {
                                    size: 14
                                },
                                color: '#000000'
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return `${context.label}: ${context.raw}%`;
                                }
                            }
                        }
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                }
            };

            // Render the chart
            const ctx = document.getElementById('doughnutChart').getContext('2d');
            new Chart(ctx, config);
        });
    </script>
    <!-- MORE PIE -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
        const ctx = document.getElementById('marketShareChart').getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Squarespace', 'GoDaddy Website Builder', 'Wix', 'Weebly', 'Custom Solutions'],
                datasets: [{
                    data: [32, 19, 16, 8, 26],
                    backgroundColor: ['#E6B8B7', '#C4E6C3', '#B7D9EB', '#E7C0D9', '#F7E1A1'], /* More muted colors */
                    borderColor: '#000000', /* Black border */
                    borderWidth: 1,
                    hoverOffset: 4
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            color: '#000000', /* Black text */
                            font: {
                                size: 18, /* Changed to 18px font size */
                                family: 'Arial', /* Ensure Arial font */
                                weight: 'normal' /* Not bold */
                            },
                            padding: 20,
                            boxWidth: 20,
                            boxHeight: 10
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.label || '';
                                let value = context.raw || 0;
                                return `${label}: ${value}%`;
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        top: 20,
                        bottom: 20
                    }
                }
            }
        });
    });
</script>
<!-- AUDIO PLAYER -->
<script>
    const audio = document.getElementById('audio');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'Pause';
    } else {
        audio.pause();
        playButton.textContent = 'Play';
    }
});
</script>
<script>
    document.addEventListener("DOMContentLoaded", function() {
        const titleWrappers = document.querySelectorAll(".timeline-title-wrapper");
        const paragraphs = document.querySelectorAll(".timeline-paragraph");
        const icons = document.querySelectorAll(".timeline-icon");

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                        observer.unobserve(entry.target); // Stop observing once animated
                    }
                });
            }, { threshold: 0.2 } // Trigger when 20% of the element is visible
        );

        // Observe title wrappers, paragraphs, and icons
        titleWrappers.forEach(wrapper => observer.observe(wrapper));
        paragraphs.forEach(paragraph => observer.observe(paragraph));
        icons.forEach(icon => observer.observe(icon));
    });
    </script>
    <!--TYPEWRITER EFFECT -->
    <script>
    document.addEventListener('DOMContentLoaded', function(event) {
        var dataText = ["Branding.", "Web Design.", "Web Development.", "Logo Creation.", "Print Design.", "Integrations."];

        function typeWriter(text, i, fnCallback) {
            if (i < text.length) {
                document.querySelector("h1").innerHTML = text.substring(0, i + 1) + '<span class="typey" aria-hidden="true"></span>';
                setTimeout(function() {
                    typeWriter(text, i + 1, fnCallback);
                }, 100);
            } else if (typeof fnCallback === 'function') {
                setTimeout(fnCallback, 1500); // Pause before starting backspace
            }
        }

        function backspace(text, i, fnCallback) {
            if (i >= 0) {
                document.querySelector("h1").innerHTML = text.substring(0, i) + '<span class="typey" aria-hidden="true"></span>';
                setTimeout(function() {
                    backspace(text, i - 1, fnCallback);
                }, 50);
            } else if (typeof fnCallback === 'function') {
                setTimeout(fnCallback, 600); // Pause before starting the next line
            }
        }

        function StartTextAnimation(i) {
            if (i < dataText.length) {
                typeWriter(dataText[i], 0, function() {
                    backspace(dataText[i], dataText[i].length - 1, function() {
                        StartTextAnimation(i + 1);
                    });
                });
            } else {
                setTimeout(function() {
                    StartTextAnimation(0); // Restart the animation loop
                }, 1000); // Pause briefly before restarting
            }
        }

        // Start the text animation on page load
        StartTextAnimation(0);
    });
    </script>
    <script>
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play-button');

    playButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playButton.textContent = 'Pause';
        } else {
            audio.pause();
            playButton.textContent = 'Play';
        }
    });
    </script>
     <script>
    document.addEventListener('DOMContentLoaded', function(event) {
        var dataText = ["Bringing Your Vision to Life Since 1995."];

        function typeWriter(text, i, fnCallback) {
            if (i < text.length) {
                document.querySelector("h1").innerHTML = text.substring(0, i + 1) + '<span class="typey" aria-hidden="true"></span>';
                setTimeout(function() {
                    typeWriter(text, i + 1, fnCallback);
                }, 100);
            } else if (typeof fnCallback === 'function') {
                setTimeout(fnCallback, 1500); // Pause before starting backspace
            }
        }

        function backspace(text, i, fnCallback) {
            if (i >= 0) {
                document.querySelector("h1").innerHTML = text.substring(0, i) + '<span class="typey3" aria-hidden="true"></span>';
                setTimeout(function() {
                    backspace(text, i - 1, fnCallback);
                }, 50);
            } else if (typeof fnCallback === 'function') {
                setTimeout(fnCallback, 600); // Pause before starting the next line
            }
        }

        function StartTextAnimation(i) {
            if (i < dataText.length) {
                typeWriter(dataText[i], 0, function() {
                    backspace(dataText[i], dataText[i].length - 1, function() {
                        StartTextAnimation(i + 1);
                    });
                });
            } else {
                setTimeout(function() {
                    StartTextAnimation(0); // Restart the animation loop
                }, 1000); // Pause briefly before restarting
            }
        }

        // Start the text animation on page load
        StartTextAnimation(0);
    });
    </script>
    <!-- MORE TYPE -->
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        const messages = [
            "Bringing Your Vision to Life Since 1995"
        ];

        // Create a temporary element to calculate the tallest message
        const tempElement = document.createElement('div');
        tempElement.style.position = 'absolute';
        tempElement.style.visibility = 'hidden';
        tempElement.style.fontSize = '3rem';
        tempElement.style.lineHeight = '1.2';
        tempElement.style.fontFamily = "'Special Elite', serif";
        document.body.appendChild(tempElement);

        let maxHeight = 0;
        messages.forEach(message => {
            tempElement.innerText = message;
            maxHeight = Math.max(maxHeight, tempElement.offsetHeight);
        });

        // Set the max height to the h1
        const header = document.querySelector('h1.main');
        header.style.height = `${maxHeight}px`;

        // Cleanup
        document.body.removeChild(tempElement);
    });
    </script>
    <script>
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play-button');

    playButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playButton.textContent = 'Pause';
        } else {
            audio.pause();
            playButton.textContent = 'Play';
        }
    });
    </script>
    <script>
    document.querySelectorAll('.custom-card-about').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30; // X tilt
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * -30; // Y tilt
            card.style.setProperty('--x', x);
            card.style.setProperty('--y', y);
        });

        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--x', 0);
            card.style.setProperty('--y', 0);
        });
    });
    </script>
    <!--TYPEWRITER EFFECT -->
    <script>
    document.addEventListener('DOMContentLoaded', function(event) {
        var dataText = ["Shape the Future of Your Idea.", "Ready to Launch Your Big Idea? We’ve Got You Covered!", "Elevate Your Idea From Concept to Creation.", "From Idea to Execution Let’s Begin the Journey!", "Shape the Future of Your Idea.", "The First Step to Greatness Starts With You.", "Shape the Future of Your Idea."];

        function typeWriter(text, i, fnCallback) {
            if (i < text.length) {
                document.querySelector("h1").innerHTML = text.substring(0, i + 1) + '<span class="typey" aria-hidden="true"></span>';
                setTimeout(function() {
                    typeWriter(text, i + 1, fnCallback);
                }, 100);
            } else if (typeof fnCallback === 'function') {
                setTimeout(fnCallback, 1500); // Pause before starting backspace
            }
        }

        function backspace(text, i, fnCallback) {
            if (i >= 0) {
                document.querySelector("h1").innerHTML = text.substring(0, i) + '<span class="typey3" aria-hidden="true"></span>';
                setTimeout(function() {
                    backspace(text, i - 1, fnCallback);
                }, 50);
            } else if (typeof fnCallback === 'function') {
                setTimeout(fnCallback, 600); // Pause before starting the next line
            }
        }

        function StartTextAnimation(i) {
            if (i < dataText.length) {
                typeWriter(dataText[i], 0, function() {
                    backspace(dataText[i], dataText[i].length - 1, function() {
                        StartTextAnimation(i + 1);
                    });
                });
            } else {
                setTimeout(function() {
                    StartTextAnimation(0); // Restart the animation loop
                }, 1000); // Pause briefly before restarting
            }
        }

        // Start the text animation on page load
        StartTextAnimation(0);
    });
    </script>
    <!-- MORE TYPE -->
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        const messages = [
            "Elevate Your Idea From Concept to Creation.",
            "Ready to Launch Your Big Idea? We’ve Got You Covered!",
            "From Idea to Execution Let’s Begin the Journey!",
            "Shape the Future of Your Idea.",
            "The First Step to Greatness Starts With You.",
            "Let's Get Started On Your Next Big Idea!"
        ];

        // Create a temporary element to calculate the tallest message
        const tempElement = document.createElement('div');
        tempElement.style.position = 'absolute';
        tempElement.style.visibility = 'hidden';
        tempElement.style.fontSize = '3rem';
        tempElement.style.lineHeight = '1.2';
        tempElement.style.fontFamily = "'Special Elite', serif";
        document.body.appendChild(tempElement);

        let maxHeight = 0;
        messages.forEach(message => {
            tempElement.innerText = message;
            maxHeight = Math.max(maxHeight, tempElement.offsetHeight);
        });

        // Set the max height to the h1
        const header = document.querySelector('h1.main');
        header.style.height = `${maxHeight}px`;

        // Cleanup
        document.body.removeChild(tempElement);
    });
    </script>
    <script>
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play-button');

    playButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playButton.textContent = 'Pause';
        } else {
            audio.pause();
            playButton.textContent = 'Play';
        }
    });
    </script>