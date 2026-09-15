function loadFooter() {
    const footer = document.getElementById("site-footer");

    if (!footer) {
        return;
    }

    footer.innerHTML = `
        <footer>
            <div class="container footer-content">

                <div>
                    <strong>Online Calculator</strong>

                    <p>
                        Simple tools for everyday calculations.
                    </p>
                </div>

                <div class="footer-links">
                    <a href="about.html">About</a>
                    <a href="contact.html">Contact</a>
                    <a href="privacy-policy.html">Privacy Policy</a>
                </div>

                <p class="copyright">
                    © 2026 Online Calculator
                </p>

            </div>
        </footer>
    `;
}

loadFooter();


const relatedCalculators = {
    "loan-calculator.html": [
        ["Compound Interest Calculator", "compound-interest-calculator.html"],
        ["Simple Interest Calculator", "simple-interest-calculator.html"],
        ["Savings Goal Calculator", "savings-goal-calculator.html"]
    ],

    "compound-interest-calculator.html": [
        ["Simple Interest Calculator", "simple-interest-calculator.html"],
        ["Savings Goal Calculator", "savings-goal-calculator.html"],
        ["Loan Calculator", "loan-calculator.html"]
    ],

    "simple-interest-calculator.html": [
        ["Compound Interest Calculator", "compound-interest-calculator.html"],
        ["Savings Goal Calculator", "savings-goal-calculator.html"],
        ["Loan Calculator", "loan-calculator.html"]
    ],

    "savings-goal-calculator.html": [
        ["Compound Interest Calculator", "compound-interest-calculator.html"],
        ["Simple Interest Calculator", "simple-interest-calculator.html"],
        ["Loan Calculator", "loan-calculator.html"]
    ], 


"bmi-calculator.html": [
    ["BMR Calculator", "bmr-calculator.html"],
    ["Calorie Calculator", "calorie-calculator.html"],
    ["Ideal Weight Calculator", "ideal-weight-calculator.html"]
],

"bmr-calculator.html": [
    ["Calorie Calculator", "calorie-calculator.html"],
    ["BMI Calculator", "bmi-calculator.html"],
    ["Ideal Weight Calculator", "ideal-weight-calculator.html"]
],

"calorie-calculator.html": [
    ["BMR Calculator", "bmr-calculator.html"],
    ["BMI Calculator", "bmi-calculator.html"],
    ["Ideal Weight Calculator", "ideal-weight-calculator.html"]
],

"ideal-weight-calculator.html": [
    ["BMI Calculator", "bmi-calculator.html"],
    ["BMR Calculator", "bmr-calculator.html"],
    ["Calorie Calculator", "calorie-calculator.html"]
],
"percentage-calculator.html": [
    ["Scientific Calculator", "scientific-calculator.html"],
    ["Fraction Calculator", "fraction-calculator.html"],
    ["Average Calculator", "average-calculator.html"]
],

"scientific-calculator.html": [
    ["Percentage Calculator", "percentage-calculator.html"],
    ["Fraction Calculator", "fraction-calculator.html"],
    ["Average Calculator", "average-calculator.html"]
],

"fraction-calculator.html": [
    ["Percentage Calculator", "percentage-calculator.html"],
    ["Scientific Calculator", "scientific-calculator.html"],
    ["Average Calculator", "average-calculator.html"]
],

"average-calculator.html": [
    ["Percentage Calculator", "percentage-calculator.html"],
    ["Scientific Calculator", "scientific-calculator.html"],
    ["Fraction Calculator", "fraction-calculator.html"]
],
"age-calculator.html": [
    ["Date Calculator", "date-calculator.html"],
    ["Date Difference Calculator", "date-difference-calculator.html"],
    ["Time Duration Calculator", "time-duration-calculator.html"]
],

"date-calculator.html": [
    ["Age Calculator", "age-calculator.html"],
    ["Date Difference Calculator", "date-difference-calculator.html"],
    ["Time Duration Calculator", "time-duration-calculator.html"]
],

"date-difference-calculator.html": [
    ["Date Calculator", "date-calculator.html"],
    ["Age Calculator", "age-calculator.html"],
    ["Time Duration Calculator", "time-duration-calculator.html"]
],

"time-duration-calculator.html": [
    ["Date Calculator", "date-calculator.html"],
    ["Date Difference Calculator", "date-difference-calculator.html"],
    ["Age Calculator", "age-calculator.html"]
],

"discount-calculator.html": [
    ["Percentage Calculator", "percentage-calculator.html"],
    ["Loan Calculator", "loan-calculator.html"],
    ["Savings Goal Calculator", "savings-goal-calculator.html"]
]
};

function loadRelatedCalculators() {
    const currentPage =
        window.location.pathname.split("/").pop();

    const related =
        relatedCalculators[currentPage];

    if (!related) {
        return;
    }

    const section =
        document.createElement("section");

    section.className = "related-calculators";

    section.innerHTML = `
        <h2>Related Calculators</h2>

        <div class="related-calculator-links">
            ${related.map(function(calculator) {
                return `
                    <a href="${calculator[1]}">
                        ${calculator[0]}
                    </a>
                `;
            }).join("")}
        </div>
    `;

    const footer =
        document.getElementById("site-footer");

    footer.parentNode.insertBefore(section, footer);
}

loadRelatedCalculators();