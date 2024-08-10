Lets' forget about all previous example and start a bland new full example with react-step-wizard

1.  the first page is a very simple Home.jsx page, which only has a link to a MultiSteps.jsx page under "pages" directory

2.  In MultiSteps.jsx, it imports react-step-wizard and shows Registered.jsx, "Have you registered to vote yet?", and provide two Radio Input Button for "Yes" and "No" answer. If "Yes" is checked and submitted, it goes to TrueIdentity.jsx page under the same "pages" directory. If "No" is checked and submitted, it goes to OldEnough.jsx page.

3.  In TrueIdentity.jsx, "Are you willing to prove your true identity to us?", and provide two Radio Input Button for "Yes" and "No" answer. If "Yes" is checked and submitted, it goes to Signup.jsx page under the same "pages" directory. If "No" is checked and submitted, it goes back to Home.jsx page, and alert "Sorry! You are not ready to register with us yet. Please register yourself to your state government as an active voter first" on Home.jsx.

4.  In Signup.jsx page, "Congratulations! You are ready to signup with us.", a very simple page.

5.  In OldEnough.jsx, "Are you old enough to vote?", and provide two Radio Input Button for "Yes" and "No" answer. If "Yes" is checked and submitted, it goes to Home.jsx page under the same "pages" directory, and alert,"Sorry! You are not ready to register with us yet. Please register yourself to your state government as an active voter first" on Home.jsx. If "No" is checked and submitted, it goes to TrueIdentity.jsx page.

6.  A user can neither go to Registered.jsx, TrueIdentity.jsx, OldEnough.jsx nor Signup.jsx directly.

7.  in App.jsx,
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />

        <Route path="/multi-steps" element={<MultiSteps />} />

      </Routes>
    </BrowserRouter>

---

Multi-steps Questionnaire works best in utils folder

This can eliminate unserious and lighthearted users,

## I think it also can make Bot Registration much harder if the quesions are in pictures.

---

pure react with out react-steps-wizard under puresteps folder
