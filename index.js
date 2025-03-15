(function () {
    // Όταν φορτώνει η σελίδα, ελέγχει το localStorage για τη γλώσσα
    document.addEventListener("DOMContentLoaded", function () {
        let savedLang = localStorage.getItem("language") || "gr"; // Default Ελληνικά
        changeLanguage(savedLang);
        setupBackToTopButton();
    });

    // Event listeners για τα κουμπιά αλλαγής γλώσσας
    document.getElementById("greek-btn").addEventListener("click", function () {
        changeLanguage("gr");
    });

    document.getElementById("english-btn").addEventListener("click", function () {
        changeLanguage("en");
    });

    function changeLanguage(lang) {
        let content = {
            "gr": {
                "title": "ΤΜΗΜΑ ΚΤΗΝΙΑΤΡΙΚΗΣ",
                "section": "📌 ΤΟΜΕΑΣ ΑΣΦΑΛΕΙΑΣ ΚΑΙ ΤΕΧΝΟΛΟΓΙΑΣ ΤΡΟΦΙΜΩΝ ΚΑΙ ΕΠΙΔΗΜΙΟΛΟΓΙΑΣ - 📌 ΕΡΓΑΣΤΗΡΙΟ ΒΙΟΣΤΑΤΙΣΤΙΚΗΣ, ΕΠΙΔΗΜΙΟΛΟΓΙΑΣ ΚΑΙ ΟΙΚΟΝΟΜΙΑΣ ΖΩΙΚΗΣ ΠΑΡΑΓΩΓΗΣ",
                "rules_title1": "1.ΥΓΙΕΙΝΗ ΚΑΙ ΑΣΦΑΛΕΙΑ ΤΩΝ ΦΟΙΤΗΤΩΝ ΚΑΙ ΤΩΝ ΕΡΓΑΖΟΜΕΝΩΝ ΣΤΗΝ ΑΙΘΟΥΣΑ ΤΟΥ ΕΡΓΑΣΤΗΡΙΟΥ ΒΙΟΧΗΜΕΙΑΣ",
                "rules": [
                    "🟠 • Η χρησιμοποίηση των Η/Y πρέπει να γίνεται προσεκτικά, λαμβάνοντας υπόψη τις επίσημες προειδοποιητικές ενδείξεις που υπάρχουν πάνω στη συσκευή, σε ότι αφορά τον χειρισμό και την ασφάλεια του χρήστη.",
                    "🟠 • Ρυθμίσετε τη θέση της καρέκλας σας, ώστε να χρησιμοποιείτε το πληκτρολόγιο με τους καρπούς και τα χέρια σας σε ευθεία και παράλληλα με το έδαφος. Οι αγκώνες να βρίσκονται στο πλάι του σώματος, ώστε η γωνία του αγκώνα να έχει σχήμα «L».",
                    "🟠 • Ρυθμίσετε την οθόνη, ώστε να βρίσκεται στο ύψος των ματιών, χωρίς αντανακλάσεις από φυσικό ή τεχνητό φως.",
                    "🟠 • Τοποθετείστε το πληκτρολόγιο απευθείας μπροστά σας. Οι καρποί σας πρέπει να είναι σε ευθεία θέση, όταν χρησιμοποιείτε το πληκτρολόγιο.",
                    "🟠 • Κρατάτε το ποντίκι του Η/Υ όσο το δυνατόν πιο κοντά σας. ",
                    "🟠 • Αποφεύγετε παρατεταμένες περιόδους συνεχούς χρήσης του Η/Υ, επιδιώκοντας μικρά διαλείμματα κάθε 30 λεπτά χρήσης του Η/Υ.",
                    "🟠 • Ενημερώστε άμεσα τον Υπεύθυνο της Αίθουσας Η/Υ, αν παρουσιάσετε κάποιο πρόβλημα υγείας κατά τη χρήση του Η/Υ. ",
                    "🟠 • Πρώτες βοήθειες: Σε περιπτώσεις μικροτραυματισμών υπάρχει φαρμακείο στην αίθουσα του Εργαστηρίου. ",
                    "🟠 • Ιατρική βοήθεια παρέχεται από Γενικό Νοσοκομείο Καρδίτσας (Τμήμα Επειγόντων περιστατικών). Τηλ.Cεπικοινωνίας  2441351520 / ΕΚΑΒ Τηλ. επικοινωνίας 166.",
                    "🟠 • Σε περίπτωση πυρκαγιάς υπάρχει σύστημα πυρόσβεσης με νερό καθώς και πυροσβεστήρες ξηράς κόνεως στο διάδρομο κάθε ορόφου / ΠΥΡΟΣΒΕΣΤΙΚΗ Τηλ. επικοινωνίας 199."
                ],
                "cautionTitle": "Προσοχή!",
                "cautionParagraph": "Ο χώρος του εργαστηρίου καθώς και τα μηχανήματα πρέπει να διατηρούνται καθαρά."

            },
            "en": {
                "title": "ΤΜΗΜΑ ΚΤΗΝΙΑΤΡΙΚΗΣ",
                "section": "📌 FACULTY OF VETERINARY MEDICINΕ DIVISION OF FOOD SAFETY AND TECHNOLOGY AND EPIDEMIOLOGY DEPARTMENT OF EPIDEMIOLOGY, BIOSTATISTICS AND ANIMAL HEALTH ECONOMICS",
                "rules_title1": "1. HEALTH AND SAFETY OF STUDENTS AND STAFF IN THE COMPUTER CLASSROOM",
                "rules": [
                    "🟠 • Computers must be used carefully, taking into account the official warning signs on the device, regarding handling and user safety.",
                    "🟠 • Adjust your chair position so that you use the keyboard with your wrists and hands straight and parallel to the ground. The elbows should be at the side of the body so that the angle of the elbow is in an 'L' shape.",
                    "🟠 • Adjust the screen so that it is at eye level, without reflections from natural or artificial light.",
                    "🟠 • Place the keyboard directly in front of you. Your wrists should be in a straight position when using the keyboard.",
                    "🟠 • Keep the computer mouse as close to you as possible.",
                    "🟠 • Avoid prolonged periods of continuous computer use, aiming for short breaks every 30 minutes of computer use.",
                    "🟠 • Immediately inform the Computer Room Manager if you experience any health problem while using the computer.",
                    "🟠 • First aid: In case of minor injuries there is a pharmacy in the Laboratory room.",
                    "🟠 • Medical assistance is provided at General Hospital of Karditsa (Emergency Care Unit). Telephone: 2441351520 / ΕΚΑΒ (National Service of Emergency Care) Telephone: 166.",
                    "🟠 • In case of fire. A Dry powder extinguisher exists on the room / Fire Service Telephone: 199."

                ],
                "cautionTitle": "Attention!",
                "cautionParagraph": "Keep the laboratory grounds and equipment always clean."
            }
        };

       // Αποθηκεύουμε τη γλώσσα στο localStorage
       localStorage.setItem("language", lang);

        // Επιλογή στοιχείων που θα αλλάξουν
        let title = document.querySelector("h1");
        let section = document.querySelector("h5");
        let rulesTitle1 = document.querySelectorAll(".rules h2")[0];
        let rulesList1 = document.querySelectorAll(".rules ul")[0].querySelectorAll("li");
        let cautionTitle = document.querySelector(".rules h4");
        let cautionParagraph = document.querySelector(".rules p");

    // Προσθήκη fade-out effect πριν την αλλαγή
    document.body.classList.add("fade-out");

    setTimeout(() => {

        // Επιλογή στοιχείων
        let title = document.querySelector("h1");
        let section = document.querySelector("h5");
        let rulesTitle1 = document.querySelectorAll(".rules h2")[0];
        let rulesList1 = document.querySelectorAll(".rules ul")[0].querySelectorAll("li");
        let cautionTitle = document.querySelector(".rules h4");
        let cautionParagraph = document.querySelector(".rules p");

        // Ενημέρωση περιεχομένου
        document.title = content[lang].title;
        title.textContent = content[lang].title;
        section.textContent = content[lang].section;
        rulesTitle1.textContent = content[lang].rules_title1;
        cautionTitle.textContent = content[lang].cautionTitle;
        cautionParagraph.textContent = content[lang].cautionParagraph;

        // Ενημέρωση λίστας κανόνων
        content[lang].rules.forEach((text, index) => {
            if (rulesList1[index]) {
                rulesList1[index].innerHTML = text;
            }
        });

        // Προσθήκη fade-in effect μετά την αλλαγή
        document.body.classList.remove("fade-out");
    }, 500); // Μικρή καθυστέρηση για ομαλή εναλλαγή
    }
    const backToTopButton = document.querySelector(".back-to-top");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) { // Εμφανίζεται μετά από 50px scroll
            backToTopButton.style.display = "flex";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Λειτουργία επιστροφής στην κορυφή
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
})();