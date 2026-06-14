const qnaData = [
    {
        id: 1,
        category: "general",
        question: "What is OCHIN Epic, and how does it differ from standard Epic software?",
        answer: "OCHIN Epic is a collaborative, single-instance version of Epic built specifically for community health centers, FQHCs, and safety-net clinics. Unlike standard 'Full' Epic (which is customized for a single health system), OCHIN Epic is shared by hundreds of clinics. A patient's record is shared across all member clinics, and clinical tools are standardized to support collaborative, affordable healthcare.",
        example: "If a patient visits Clinic A (an OCHIN clinic in Oregon) and then travels to Clinic B (an OCHIN clinic in California), Clinic B can instantly view the clinical history, lab results, and current medication list of that patient without requesting a Care Everywhere transfer."
    },
    {
        id: 2,
        category: "general",
        question: "How do I log in to the OCHIN Epic environment for the first time?",
        answer: "Use the OCHIN Citrix Gateway or direct web link provided by your clinic's IT. You will log in using your OCHIN-assigned username (typically formatted as your email prefix or first initial + last name + clinic code) and a temporary password, which you must change immediately. Two-Factor Authentication (Duo Security) is required for all logins.",
        example: "To set up Duo, download the Duo Mobile app on your smartphone. When logging in, select 'Send Push' to approve the security request."
    },
    {
        id: 3,
        category: "general",
        question: "What is the difference between PLY (Playground) and PRD (Production) environments?",
        answer: "PLY (Playground) is a training environment where you can practice charting, registration, and billing with fake patient records. PRD (Production) is the live system containing real patient clinical and billing data. NEVER input real patient data into PLY, and never practice on fake patients in PRD.",
        example: "Use PLY during your training sessions to practice order entry without generating real billing claims or sending prescriptions to real pharmacies."
    },
    {
        id: 4,
        category: "general",
        question: "Why can't our clinic customize clinical templates or forms immediately?",
        answer: "Because OCHIN Epic is a shared instance, customizing templates locally could break workflows or databases for other clinics. System-wide changes must go through OCHIN's Collaborative Governance process, where clinics vote on requested builds to ensure usability and compliance across the network.",
        example: "If your clinic wants a new fields added to the Pediatric Rooming Flowsheet, your Site Specialist must submit a Request to OCHIN. If approved by the pediatric committee, it will be scheduled for a future system release."
    },
    {
        id: 5,
        category: "general",
        question: "What should I do if OCHIN Epic goes offline or suffers a network interruption?",
        answer: "Every clinic has a Read-Only Web (ROW) workstation or a local downtime server. If the network goes down, switch to your clinic's downtime procedures. Open the Epic Read-Only Web browser bookmark to view active patient schedules and clinical records. Document clinical visits on physical downtime paper forms.",
        example: "Locate your clinic's physical 'Downtime Binder' containing paper progress notes, order forms, and registration logs. These will be scanned and back-entered when the system comes back online."
    },
    {
        id: 6,
        category: "frontdesk",
        question: "How do I prevent creating duplicate patient charts during registration?",
        answer: "Always follow the OCHIN Search Strategy: enter the first three letters of the last name, first three of the first name, and DOB (e.g. 'SMI, JO' for John Smith). If no results appear, search using SSN, phone number, or alternative names. Do not click 'New' until you have exhausted all search parameters.",
        example: "Searching for 'Roberto Gomez-Lopez' under 'Gomez-Lopez, Roberto' might fail if a previous clinic entered him as 'Gomez, Roberto'. Search using DOB and first three of the last name to identify potential matches."
    },
    {
        id: 7,
        category: "frontdesk",
        question: "What are the mandatory UDS fields required during registration?",
        answer: "Under HRSA regulations, FQHCs must report patient demographics including: Sexual Orientation and Gender Identity (SOGI), Housing Status (housed, homeless, etc.), Agricultural Worker Status, and Household Income / Family Size. These must be completed in the registration screen to prevent UDS report errors.",
        example: "Ask the patient: 'To help us meet federal requirements and provide the best care, could you please tell us if you identify as male, female, transgender...?' Select the appropriate dropdown in the SOGI section."
    },
    {
        id: 8,
        category: "frontdesk",
        question: "How do I configure a Sliding Fee Scale (SFS) for a self-pay patient?",
        answer: "Open the Patient Registration screen and navigate to the Sliding Fee Scale section. Enter the verified annual household income and total family size. The system calculates the Federal Poverty Level (FPL) percentage and assigns the correct SFS level. You must then attach this SFS plan to the patient's Self-Pay Guarantor account.",
        example: "A family of 4 with an annual income of $26,000 matches Tier A of the sliding scale. The patient is charged a nominal fee (e.g., $10) for the visit, which you collect as their copay."
    },
    {
        id: 9,
        category: "frontdesk",
        question: "What is a Guarantor Account, and why is it important in OCHIN Epic?",
        answer: "A Guarantor Account designates the person or entity financially responsible for a bill. Patients can have multiple guarantor accounts (e.g., Personal/Self-Pay, Commercial Insurance, Medicaid, or Workers' Comp). Selecting the correct guarantor during check-in is critical so claims are sent to the correct payer.",
        example: "For a pediatric patient, the parent/guardian is listed as the Guarantor. For an adult with an active worker's comp claim, the worker's comp guarantor must be linked to that specific visit rather than their personal insurance."
    },
    {
        id: 10,
        category: "frontdesk",
        question: "How do I check a patient's insurance eligibility in real-time?",
        answer: "Use the Real-Time Eligibility (RTE) button in the registration or check-in screen. When clicked, Epic sends a query to the payer and returns an active/inactive status, along with copay and deductible details within seconds. If active, the system displays a green checkmark next to the coverage.",
        example: "If a Medicaid patient presents a card, run RTE. If the response shows 'Inactive', ask the patient for an updated card or help them apply for the sliding scale fee plan."
    },
    {
        id: 11,
        category: "clinical",
        question: "Where do I document clinical vitals during a patient rooming process?",
        answer: "Navigate to the Rooming activity in the Patient Navigator. Enter vitals (BP, Heart Rate, Temp, Height, Weight, SpO2) in the Flowsheets section. Epic automatically flags abnormal vitals (red or blue) and calculates BMI and pediatric growth percentiles.",
        example: "If a patient's blood pressure is 150/96, the system highlights the numbers in red. You may receive a pop-up prompting you to repeat the blood pressure reading later in the visit."
    },
    {
        id: 12,
        category: "clinical",
        question: "How do I use SmartPhrases (.phrases) to speed up clinical documentation?",
        answer: "SmartPhrases are text macros. Type a dot (.) followed by the phrase name in any free-text clinical box (e.g., '.ros' for Review of Systems). Press Space or Enter, and the macro expands into the full text. You can create custom phrases in the SmartPhrase Manager or copy shared templates from other OCHIN clinicians.",
        example: "Type '.ochinhtn' to insert a pre-written patient education plan for hypertension, complete with dietary instructions, medications, and follow-up guidelines."
    },
    {
        id: 13,
        category: "clinical",
        question: "What is the OCHIN Visit Navigator, and how do I use it?",
        answer: "The Visit Navigator is the vertical sidebar layout on the left of the patient chart that walks you through a standard clinical encounter. It includes sections for Reason for Visit, Allergies, History, Vitals, Flowsheets, Progress Notes, and Meds & Orders. Work your way down the navigator to complete the documentation.",
        example: "A nurse uses the Rooming Navigator to enter vitals and screen for depression, while the doctor uses the Plan/Provider Navigator to enter diagnoses and write progress notes."
    },
    {
        id: 14,
        category: "clinical",
        question: "How do I document or update a patient's allergy list?",
        answer: "Open the Allergies section in the Rooming or Plan Navigator. Search for the allergen (drug, food, or environmental factor). Choose the correct allergen, select the reaction type (e.g., rash, anaphylaxis), and click 'Save'. If the patient has no allergies, you must click 'Mark as Reviewed' to satisfy quality metrics.",
        example: "If a patient states they get hives from penicillin, search 'Penicillins', choose it, select 'Hives / Urticaria' as the reaction, and mark the list as reviewed."
    },
    {
        id: 15,
        category: "clinical",
        question: "What is a 'SmartLink' and how does it pull patient data into my progress notes?",
        answer: "A SmartLink is a dynamic macro (e.g., '.age', '.bp', '.medlist') that fetches real-time data from the patient's chart and inserts it directly into your text note. Unlike static text, SmartLinks pull fresh data every time the note is opened or generated.",
        example: "Writing 'Patient is a @AGE@ year old @SEX@' automatically renders as 'Patient is a 45 year old male' in the final signed note."
    },
    {
        id: 16,
        category: "clinical",
        question: "How do I perform Medication Reconciliation (Med Rec) at the start of a visit?",
        answer: "Go to the Medications section of the Rooming Navigator. Review each listed drug with the patient. For each medication, verify if the patient is taking it. You can mark it as 'Taking', change the dose, or delete it if discontinued. Once done, you must click 'Mark as Reviewed' to sign off on Med Rec compliance.",
        example: "If the patient reports they stopped taking Lisinopril, click the trash can icon next to the drug, document the reason (e.g., 'cough'), and click 'Mark as Reviewed'."
    },
    {
        id: 17,
        category: "clinical",
        question: "How do I queue a prescription order for provider signature?",
        answer: "As clinical support staff (MA or Nurse), search for the medication in the 'Meds & Orders' section. Configure the dose, route, frequency, and select the patient's preferred pharmacy. Choose the authorizing provider and select 'Queue' or 'Associate Diagnosis'. The order will appear on the provider's screen for final signing.",
        example: "An MA queues Albuterol 90 mcg inhaler, associates it with the patient's asthma diagnosis, and selects the local pharmacy. The doctor receives a signing alert in their Visit Navigator."
    },
    {
        id: 18,
        category: "clinical",
        question: "What is the difference between a Clinic Preference List and the Full Database Search?",
        answer: "The Clinic Preference List is a curated set of frequently used orders (medications, labs, referrals) specific to your clinic or specialty, making order entry fast. The Database Search covers all active OCHIN records. If a medication is not on your preference list, search the database using the 'Database Search' tab.",
        example: "Searching 'Amlodipine' will show up instantly in the preference list tab. An uncommon specialist medication may require clicking the 'Database Search' button to locate it."
    },
    {
        id: 19,
        category: "clinical",
        question: "How do I resolve a Drug-Drug Interaction alert during order entry?",
        answer: "Epic evaluates queued orders against the patient's active medication list. If a conflict occurs, a warning box alerts you to the severity. For minor interactions, you may override the alert by selecting a reason. For contraindications, you must consult the provider or change the order.",
        example: "Queuing Clarithromycin for a patient taking Simvastatin triggers a moderate interaction warning. Select 'Benefit outweighs risk' or adjust the prescription to avoid muscle toxicity."
    },
    {
        id: 20,
        category: "billing",
        question: "What is the Sliding Fee Scale copay collection policy at checkout?",
        answer: "At checkout, review the patient's sliding fee scale category. Collect the designated nominal copay (e.g., $10 or $20) based on their assigned tier. Post the payment directly to the visit guarantor account. If the patient is unable to pay, follow clinic policy (e.g., billing the account or writing off with supervisor approval).",
        example: "A patient on Tier B SFS has a $15 copay. Post a $15 cash payment to the Self-Pay/SFS guarantor. Provide the patient with a receipt printed from Epic."
    },
    {
        id: 21,
        category: "clinical",
        question: "How do I document annual FQHC depression screenings (PHQ-2/PHQ-9) in the flowsheet?",
        answer: "Navigate to the Rooming section of the Patient Navigator. Find the Screening Flowsheet and enter the PHQ-2 responses. If the score is 3 or higher, the system triggers a cascade, opening the PHQ-9 flowsheet fields. Complete all questions, and the system automatically calculates the severity score and inserts it into the note.",
        example: "A patient reports feeling down (score 2) and having little interest in activities (score 2) on PHQ-2. The total score is 4. The MA completes the PHQ-9, yielding a score of 12 (Moderate Depression), triggering a depression care alert."
    },
    {
        id: 22,
        category: "general",
        question: "Can I customize the Visit Navigator panels to fit my specialty's workflow?",
        answer: "Yes, to a degree. In the Visit Navigator sidebar, click the gear icon (Configure) at the bottom. You can drag and drop sections to reorder them or pin frequently used navigators (e.g., Rooming, Plan, Wrap-Up) to your speed bar.",
        example: "A pediatric nurse hides the Geriatric Screenings panel and moves the Immunizations panel to the top of their Rooming Navigator."
    },
    {
        id: 23,
        category: "clinical",
        question: "How do I share my custom SmartPhrases with other clinicians in our clinic?",
        answer: "Go to the SmartPhrase Manager (type '.user' or open it via the Epic menu). Search for your phrase, select it, and go to the 'Sharing' tab. Add the usernames or provider groups of the colleagues you want to share with, and grant them 'Use' or 'Edit' rights.",
        example: "Dr. Smith creates a SmartPhrase for diabetic follow-up notes and shares it with the clinic's nurse practitioners, who can then invoke it using '.smithdiabetic'."
    },
    {
        id: 24,
        category: "clinical",
        question: "What is the correct way to interact with a SmartList inside a progress note?",
        answer: "SmartLists are bracketed in yellow with options separated by commas. Left-click a list to expand it. Click options to select them. To select multiple options (if allowed), hold Ctrl while clicking. Right-click anywhere in the list to close it and finalize your selection.",
        example: "A SmartList displays '{mild, moderate, severe}'. Left-click it, click 'moderate', and right-click. The text in your note immediately collapses to 'moderate'."
    },
    {
        id: 25,
        category: "clinical",
        question: "How do I navigate a progress note template quickly using keyboard shortcuts?",
        answer: "Use the F2 key. When you insert a template containing wildcards (***) or SmartLists, pressing F2 instantly jumps your cursor to the next blank field or dropdown, letting you document without touching the mouse.",
        example: "Type '.soapnote' to load a template. Press F2 to jump directly to the Chief Complaint wildcard, type the text, then press F2 to jump to the next screening dropdown."
    },
    {
        id: 26,
        category: "clinical",
        question: "How do I link ICD-10 diagnoses to medication and laboratory orders?",
        answer: "In the Meds & Orders screen, click the 'Associate' button next to each order. A pop-up grid displays active visit diagnoses. Check the boxes corresponding to the diagnoses that justify each order. Correct association prevents billing denials.",
        example: "You order an A1c lab test and Metformin. Check the box for 'Type 2 Diabetes Mellitus' next to both orders in the association grid."
    },
    {
        id: 27,
        category: "clinical",
        question: "What is the OCHIN InBasket and how do I manage patient messages?",
        answer: "The InBasket is Epic's internal messaging portal. It organizes incoming items into folders: Patient Messages (MyChart), Rx Refill Requests, Results, and Co-signatures. Mark items as 'Done' or route them to other staff to maintain a clean queue.",
        example: "A nurse opens the 'Rx Refills' folder, checks a patient's compliance, and routes the refill request to the PCP with a note stating 'No recent office visit, recommended 3-month supply'."
    },
    {
        id: 28,
        category: "frontdesk",
        question: "How do I register a patient for the MyChart Patient Portal?",
        answer: "During check-in, verify the patient's email and phone number. Under the MyChart section of registration, click 'Activate MyChart'. The system can send an instant activation text link or email, allowing the patient to set up their password on their phone.",
        example: "A receptionist checks in a patient, clicks 'Send MyChart Text Link', and guides the patient to open the link on their smartphone to complete registration before leaving."
    },
    {
        id: 29,
        category: "general",
        question: "What is Care Everywhere and how do I query records from non-OCHIN systems?",
        answer: "Care Everywhere is Epic's inter-organizational exchange system. If a patient was seen at an outside hospital system (e.g., Kaiser, local university hospital), click the 'Care Everywhere' tab, select the organization, and request query records to pull outside progress notes, labs, and imaging.",
        example: "A clinic doctor queries Care Everywhere to import a discharge summary and cardiac catheterization report from a major regional medical center."
    },
    {
        id: 30,
        category: "clinical",
        question: "What is a SmartText and how is it different from a SmartPhrase?",
        answer: "A SmartPhrase is a small user-created macro. A SmartText is a full, structured template built by system analysts that contains complex formatting, SmartLinks, and SmartLists. SmartTexts are typically loaded via the template box at the top of a progress note.",
        example: "For a physical exam, select the 'Adult Preventive Medicine' SmartText, which loads a pre-formatted template with all age-appropriate screening guidelines."
    },
    {
        id: 31,
        category: "general",
        question: "How do I use Chart Search to find historical lab results or documents?",
        answer: "Press Ctrl+Space from anywhere inside a patient's chart to open the Chart Search box. Type what you are looking for (e.g., 'A1c', 'colonoscopy', or 'x-ray'). Epic searches all lab records, notes, and scans, displaying direct links to matching data.",
        example: "Type 'lipid' in Chart Search to view a chronological line graph of all cholesterol panels completed for the patient over the last five years."
    },
    {
        id: 32,
        category: "clinical",
        question: "How do I correct a flowsheet entry that I documented in error?",
        answer: "Double-click the flowsheet cell containing the incorrect value. Edit the text or number. Right-click the cell and select 'Show Audit Trail' to view history. Epic flags edited cells with a small blue triangle, keeping a record of changes for compliance.",
        example: "An MA accidentally enters a patient's weight as 180 kg instead of 180 lbs. They double-click, change it, and add a note explaining the clerical correction."
    },
    {
        id: 33,
        category: "clinical",
        question: "How do I resolve missing documentation that prevents signing the encounter?",
        answer: "If you try to sign a visit and receive a hard stop, click 'Verify' or check the 'Encounter Health' checklist in the Plan section. Missing elements like a selected diagnosis or a missing Level of Service (LOS) code will be highlighted in red with direct links to fix them.",
        example: "A provider clicks 'Sign' but is blocked. Epic opens the LOS screen automatically because no E&M code (e.g., 99214) was selected for the encounter."
    },
    {
        id: 34,
        category: "clinical",
        question: "How does a resident or student route their visit notes for attending cosign?",
        answer: "In the Sign Visit navigator tab, locate the Attending/Supervising Provider section. Enter the attending provider's name, select 'Co-signature required' or 'Attending Attestation required', and click sign. This routes the note to the attending's InBasket.",
        example: "A resident documents a complex primary care visit, adds Dr. Green as the attending in the Sign tab, and signs. The note goes to Dr. Green's InBasket 'Co-sign' queue."
    },
    {
        id: 35,
        category: "clinical",
        question: "What is the After Visit Summary (AVS) and what should be included?",
        answer: "The AVS is the document given to patients at checkout. It includes their diagnoses, medication changes, instructions, and future appointments. Update patient-facing instructions in the Navigator so they print clearly in plain English on the AVS.",
        example: "A doctor updates the patient instructions to read 'Take your new blood pressure pill in the morning, not at night'. This text is bolded at the top of the printed AVS."
    },
    {
        id: 36,
        category: "general",
        question: "How do I route a referral or specialist letter outside the OCHIN network?",
        answer: "In the order entry section, select the 'Referral' order. Under routing/recipient details, search for the external provider or group. Epic routes this via Care Everywhere or secure e-fax. The document automatically attaches to the outgoing referral package.",
        example: "You order a referral to Cardiology. Select 'External Referral', choose 'Providence Heart Clinic', and associate it with 'Atrial Fibrillation'. The system queues the charts for outgoing secure transmission."
    },
    {
        id: 37,
        category: "clinical",
        question: "Where do I find and document the patient's Care Plan?",
        answer: "The Care Plan is located in the Care Plan or Patient Goals tab in the Patient Navigator. It tracks chronic disease goals, barriers, and patient-centered targets (e.g., 'Walk 30 minutes a day'). You can edit existing goals or add new clinical targets.",
        example: "For a diabetic patient, open the Care Plan tab and add the goal 'Increase daily exercise', then record the patient's self-assessed readiness scale as '8 out of 10'."
    },
    {
        id: 38,
        category: "clinical",
        question: "Can I record multiple Chief Complaints for a single visit?",
        answer: "Yes. In the Chief Complaint flow section, search and add multiple complaints (e.g., 'Cough' and 'Back Pain'). You can prioritize them by arranging them numerically or designating one as the primary reason for visit.",
        example: "An MA adds 'Chronic back pain' and 'Medication refill' as chief complaints, selecting 'Back pain' as primary to drive the charting flowsheets."
    },
    {
        id: 39,
        category: "clinical",
        question: "Are pediatric vitals ranges adjusted automatically in OCHIN flowsheets?",
        answer: "Yes. Vitals flags (red/blue highlights) are dynamically calculated based on the patient's age and gender metadata. High heart rates or low blood pressures that are normal for adults but abnormal for infants will flag correctly.",
        example: "An infant's heart rate of 140 bpm will not trigger a high alert flag, whereas the same heart rate on a 40-year-old adult would flag in bright red."
    },
    {
        id: 40,
        category: "general",
        question: "How do I customize my Clinic Schedule or Tracking Board views?",
        answer: "Click the gear icon on the Schedule or Tracking Board tab. Select which providers, departments, or clinic chairs you want to display, and save as your default view. You can also filter by appointment status (e.g., Arrived, Checked Out).",
        example: "A medical assistant sets their schedule view to only display patients assigned to Dr. Smith's schedule for the current date, filtering out other providers."
    },
    {
        id: 41,
        category: "clinical",
        question: "How do I order a medication that is not listed on my clinic's preference list?",
        answer: "In the Meds & Orders activity, look above your search results. Click the tab labeled 'Database Search' or 'All OCHIN' instead of 'Preference List'. This queries the entire master file database of medications maintained by the OCHIN collaborative. Configure dose, route, and frequency as usual.",
        example: "You search for an uncommon immunosuppressant 'Tacrolimus' and get no results. Click 'Database Search' to load and order it."
    },
    {
        id: 42,
        category: "clinical",
        question: "How do I e-prescribe controlled substances (EPCS) in OCHIN Epic?",
        answer: "Ensure your DEA/NPI are active and EPCS authorized in your profile. When signing a controlled substance order, Epic opens a cryptographic signing window. Enter your Epic password and approve the Duo push notification sent to your authorized mobile device.",
        example: "Signing an oxycodone order prompts for password and Duo verification. Approving the push on your phone immediately transmits the order to the pharmacy."
    },
    {
        id: 43,
        category: "clinical",
        question: "How do I resolve a Surescripts e-prescription transmission failure?",
        answer: "If Surescripts fails, check your InBasket 'Rx Errors' folder. Verify the pharmacy's active status. If a Surescripts match error occurs (e.g., pharmacy has closed or changed NPI), edit the order, select an active pharmacy from the directory, and sign to resend.",
        example: "A transmission failure alert shows 'Pharmacy closed permanently'. Search and select a nearby active chain pharmacy, link it, and click 'Resend'."
    },
    {
        id: 44,
        category: "clinical",
        question: "What is the clinical protocol for refilling a prescription when the patient is overdue for a visit?",
        answer: "Open the refill request in InBasket. Check the last encounter date and lab reviews. If overdue, approve a short-term 'bridge' supply (e.g., 30 days) to prevent discontinuation. Send a message to scheduling to call the patient, and note in the refill 'Bridge approved, patient needs office visit'.",
        example: "A patient requests a Metformin refill but has not been seen in 12 months. Approve a 30-day supply with 0 refills and route a task to the care coordinator."
    },
    {
        id: 45,
        category: "clinical",
        question: "How do I route an InBasket message to a shared clinic pool instead of an individual user?",
        answer: "In the routing recipient field, type 'P ' followed by the pool name (e.g., 'P OCHIN MA POOL' or 'P ADULT MEDICINE NURSING'). Routing to a pool allows any clinic nurse or MA on shift to claim, resolve, and archive the message, keeping the queue moving.",
        example: "Instead of routing a patient's call back request to a specific MA, route to 'P CLINIC A MA POOL'. The first available MA claims and answers it."
    },
    {
        id: 46,
        category: "clinical",
        question: "How do I sign off on multiple lab results in bulk from my InBasket?",
        answer: "Open the 'Results' folder in your InBasket. Hold Ctrl and click to highlight multiple rows, or Shift+Click to select a block. Click the 'QuickSign' button at the top of the InBasket workspace. This signs and archives all selected results at once, using your default comment.",
        example: "Select five normal lipid panels from your queue, click 'QuickSign', and they are automatically finalized and sent to the patients' MyChart portals."
    },
    {
        id: 47,
        category: "clinical",
        question: "What is an Order Set and how does it save time during a visit?",
        answer: "An Order Set is a prepackaged group of orders (labs, meds, instructions, referrals) grouped around a specific clinical diagnosis or workflow (e.g., 'Hypertension Workup' or 'Prenatal Intake'). Type the order set name in the search bar to load all associated orders in a single click.",
        example: "Select the 'Diabetes Intake Order Set'. It loads labs (A1c, microalbumin), immunizations (flu, pneumonia), and referrals (diabetic eye exam) pre-selected."
    },
    {
        id: 48,
        category: "clinical",
        question: "What is a SmartSet and how does it differ from a standard order set?",
        answer: "While an Order Set only contains diagnostic and medication orders, a SmartSet is a broader documentation package. It includes pre-checked visit diagnoses, pre-written progress notes (SmartTexts), patient instructions, billing codes, and order sets packaged in a single tab.",
        example: "Use the 'Adult Wellness SmartSet'. It automatically pulls in the health maintenance documentation, wellness codes, age-appropriate vaccine orders, and patient AVS handouts."
    },
    {
        id: 49,
        category: "clinical",
        question: "What is the difference between a 'Future Order' and a 'Standing Order'?",
        answer: "A Future Order is scheduled to be released and performed once on a specific future date. A Standing Order is recurring, instructing clinical staff or labs to repeat a test at designated intervals (e.g., 'Every 3 months for 1 year') without needing new signatures.",
        example: "Order an A1c as a Standing Order: frequency 'Every 3 months', quantity '4 occurrences', for longitudinal diabetic monitoring."
    },
    {
        id: 50,
        category: "clinical",
        question: "How do I release lab results to a patient's MyChart portal?",
        answer: "When reviewing results in your InBasket or the chart, click the 'Release' button. You can choose to release immediately, delay release (e.g., 24-hour delay for sensitive results), or suppress release. Write a patient-friendly message in the comment box to help them interpret the values.",
        example: "Click 'Release' on a normal thyroid panel, adding the note: 'Your thyroid levels look completely normal. Continue taking your Levothyroxine dose as prescribed'."
    },
    {
        id: 51,
        category: "general",
        question: "How do I create and use InBasket QuickActions?",
        answer: "QuickActions are buttons you customize to perform multiple repetitive clicks at once. In the InBasket settings, configure a QuickAction button (e.g., 'Release & Done'). When clicked on a result, it automatically releases the result to MyChart, attaches a standard 'Results are normal' note, and marks the message as done.",
        example: "Create a QuickAction named 'Normal CBC'. Clicking it automatically writes 'CBC is normal', releases it, and archives the message."
    },
    {
        id: 52,
        category: "general",
        question: "How do I designate another provider to cover my InBasket when I am out of office?",
        answer: "In the InBasket toolbar, click 'Attach Out of Office Coverage'. Add the name of the covering provider or pool, specify the start and end dates, and choose which folders to forward (e.g., Rx Refills, Results). The covering provider receives a separate tab in their InBasket.",
        example: "Set coverage for Dr. Jones for next week. Dr. Jones gets a 'Dr. Smith (Covering)' InBasket folder to handle your refills while you are away."
    },
    {
        id: 53,
        category: "general",
        question: "What is a schedule template, and who manages it in OCHIN?",
        answer: "Schedule templates define the clinic hours, slot durations, and appointment types (e.g., new patient, established, telehealth) for each provider. Templates are configured by local super users or OCHIN scheduling coordinators, and are locked down to maintain standardized access.",
        example: "A coordinator locks Dr. Adams' morning template to only allow 40-minute 'New Patient Intake' slots, while opening the afternoon to 20-minute follow-ups."
    },
    {
        id: 54,
        category: "frontdesk",
        question: "How do I configure secondary insurance coverage in registration?",
        answer: "In the Checklist or Coverage Info screen, click 'Add Coverage'. Select the insurance payer, subscriber ID, and guarantor. Verify the coordination of benefits (COB) priority, marking the employer plan as Primary and the state Medicaid or supplemental plan as Secondary.",
        example: "Add Medicare Part B as Primary insurance, then add state Medicaid. The system automatically coordinates the remaining 20% coinsurance billing to Medicaid."
    },
    {
        id: 55,
        category: "frontdesk",
        question: "How do I handle an expired Sliding Fee Scale (SFS) at check-in?",
        answer: "If an SFS expiration alert flashes during check-in, notify the patient that their sliding scale must be updated. Provide the clinic SFS application. If they have proof of income (pay stubs, tax returns), update the SFS screen. If not, apply a 30-day grace period plan if authorized by clinic policy.",
        example: "An alert shows 'SFS expired 6/1/2026'. Input current family size and self-reported income to generate a temporary grace-period tier to ensure they receive care today."
    },
    {
        id: 56,
        category: "frontdesk",
        question: "Where do I track the status of a pending Prior Authorization (PA)?",
        answer: "PAs are managed in the Referral or Authorization Activity workspace. Open the referral order to view status comments: 'Pending Payer Review', 'Approved', 'Information Requested', or 'Denied'. Epic updates this when the payer responds electronically.",
        example: "Search for a pending MRI order. The status displays 'Pending PA - Documentation submitted 6/12'. You can see the auth number once updated."
    },
    {
        id: 57,
        category: "clinical",
        question: "How are critical lab results highlighted and routed in OCHIN InBasket?",
        answer: "Critical labs (values that require immediate intervention) trigger a high-priority red alert envelope in your InBasket. If the clinician is logged out, the system can escalate the alert by sending a page or text to the on-call pool or supervising clinician.",
        example: "A potassium result of 6.2 mmol/L is flagged as 'CRITICAL HIGH'. The provider's InBasket sounds an alert chime and displays a red exclamation mark."
    },
    {
        id: 58,
        category: "clinical",
        question: "How do nurses document and sign off on verbal orders from providers?",
        answer: "If a provider gives a verbal order, the nurse enters the order in the chart, selects 'Verbal' as the order source in the ordering panel, and designates the provider as the authorizing clinician. Epic routes the order to the provider's co-sign queue.",
        example: "A nurse enters an EKG order during an emergency, marks it as 'Verbal', and selects 'Dr. Smith'. Dr. Smith receives a co-sign alert to review and sign off."
    },
    {
        id: 59,
        category: "clinical",
        question: "What is a Best Practice Advisory (BPA) and how do I resolve one?",
        answer: "A BPA is a pop-up clinical decision support alert triggered by patient criteria (e.g., patient is over 50 and overdue for colorectal screening). Resolve by choosing a pre-configured action (e.g., 'Order Mammogram') or selecting an override reason (e.g., 'Patient refused').",
        example: "A BPA alerts you that a diabetic patient has no active statin medication. Click the button inside the alert to immediately queue a Simvastatin order."
    },
    {
        id: 60,
        category: "clinical",
        question: "How do I query the state immunization registry to retrieve external vaccines?",
        answer: "Open the Immunization activity inside the patient's chart. Click the 'Query Registry' button at the top of the interface. Epic queries the state database (e.g., Oregon ALERT IIS) and displays historical vaccine doses. Click 'Reconcile' to select and import them.",
        example: "Querying the registry pulls a Covid-19 vaccine administered at a local commercial pharmacy. Click 'Import' to add it to the patient's permanent record."
    },
    {
        id: 61,
        category: "billing",
        question: "What is the Prospective Payment System (PPS) and how does it affect FQHC billing?",
        answer: "Under the PPS, FQHCs receive a flat, pre-determined reimbursement rate per encounter for Medicare/Medicaid patients, rather than billing for individual procedures. Clinicians must still document standard E&M and procedure codes to justify medical necessity, but the financial payment is triggered by FQHC-specific G-codes.",
        example: "Regardless of whether a patient has a simple or complex consult, the FQHC receives the same regional PPS rate (e.g. $180) once the corresponding visit G-code is submitted."
    },
    {
        id: 62,
        category: "billing",
        question: "When should modifier -25 be appended to an E&M code?",
        answer: "Append modifier -25 to an E&M level of service code (e.g., 99214-25) when a significant, separately identifiable evaluation and management service is performed by the same physician on the same day as a minor procedure or injection.",
        example: "A patient presents for diabetes follow-up and also has a suspicious skin lesion excised. Append -25 to the 99214 code to ensure both the visit and the excision are paid."
    },
    {
        id: 63,
        category: "billing",
        question: "Can an SFS adjustment be applied retroactively to a past unpaid visit?",
        answer: "Yes. If a self-pay patient registers without proof of income and later returns with their tax stubs, open the Account Maintenance screen. Apply the verified SFS tier retroactively to the date of service. The system recalculates the patient responsibility and adjusts off the excess balance.",
        example: "A patient was billed the full $150 fee on June 1. They submit proof of income on June 10, showing they qualify for Tier A ($10 fee). Recalculate the June 1 charge to adjust off $140."
    },
    {
        id: 64,
        category: "billing",
        question: "What are FQHC G-codes and where do I enter them?",
        answer: "FQHC G-codes (e.g., G0466, G0467) represent FQHC specific visits (e.g., Established Patient Clinical Visit). They are entered in the Level of Service (LOS) tab or added via the Charge Capture section by the clinician or coding specialist at checkout.",
        example: "For a routine follow-up on a Medicare patient, select E&M code 99213 and select FQHC Established Patient G0467. The system bundles these for reimbursement."
    },
    {
        id: 65,
        category: "billing",
        question: "How do I resolve a 'Missing Provider NPI' error in a Claim Edit Workqueue?",
        answer: "Open the flagged claim inside the Billing Workqueue. Go to the Provider Info tab. Verify if the billing or rendering provider NPI is missing. Enter the provider's valid 10-digit National Provider Identifier (NPI) in their master file profile, or contact credentialing, then click 'Resubmit'.",
        example: "A claim for Dr. Carter is blocked. You open his provider record in Epic, paste his NPI, click save, and resubmit the claim directly from the workqueue."
    },
    {
        id: 66,
        category: "billing",
        question: "What is the policy for waiving a sliding scale nominal fee if the patient cannot pay?",
        answer: "Under HRSA guidelines, FQHCs cannot turn patients away due to inability to pay. If a patient cannot afford the nominal fee (e.g. $10), check the 'Waive Copay' box in the checkout screen and select an approved waiver reason (e.g., 'Financial Hardship'). The charge adjusts off rather than going to collection.",
        example: "A homeless patient states they have no money. Select 'Hardship Waiver' in the payment screen. The $10 copay is written off, and the visit is completed."
    },
    {
        id: 67,
        category: "billing",
        question: "How do I process credit card payments directly within OCHIN Epic?",
        answer: "OCHIN integrates with payment merchants like InstaMed. In the Payment Posting screen, swipe the card or manually type the card details. Epic securely transmits the data, posts the credit card transaction instantly to the patient's account, and prints an integrated receipt.",
        example: "A patient pays their $15 copay with a credit card. Swipe the card in the USB terminal. Epic processes the transaction, shows 'Approved', and updates the account balance."
    },
    {
        id: 68,
        category: "billing",
        question: "What is the Charge Router and how does it prevent double-billing?",
        answer: "The Charge Router is a background engine that receives charges from clinical encounters and filters them before they become actual claims. It detects duplicate charges (e.g., two identical vitals charges entered in error) and automatically holds or merges them based on timing rules.",
        example: "An MA clicks 'Sign' twice on an immunization order. The Charge Router flags the duplicate vaccine charge and holds it in the error queue for review."
    },
    {
        id: 69,
        category: "general",
        question: "What is UDS and why is accurate documentation critical for OCHIN member clinics?",
        answer: "The Uniform Data System (UDS) is an annual federal reporting requirement for FQHCs receiving HRSA funding. Grants, subsidies, and safety-net status depend on the accuracy of UDS demographic and clinical metrics. Blank fields or incorrect codes directly impact clinic funding.",
        example: "Failing to document a patient's housing status or federal poverty tier results in a non-compliant UDS record, which can trigger HRSA grant audits."
    },
    {
        id: 70,
        category: "general",
        question: "What is the PRAPARE screening tool and where is it documented?",
        answer: "PRAPARE is a standardized national assessment used to document Social Determinants of Health (SDOH). It is completed in the Social History or Screening Flowsheets navigator. It gathers data on housing security, food access, transportation, and utility needs.",
        example: "An MA screens a patient and documents they have no reliable transportation. This triggers a referral to the clinic's Social Worker or community health worker."
    },
    {
        id: 71,
        category: "frontdesk",
        question: "What is a 'Schedule Block' and how is it used for urgent care slots?",
        answer: "A Schedule Block is a reserved slot on a provider's schedule that can only be filled by specific types of visits (e.g., 'Same Day Urgent' or 'Post-Hospital Discharge'). This prevents routine physicals from taking up slots reserved for sick patients.",
        example: "A scheduler tries to book a routine 6-month check-up at 10:00 AM, but Epic blocks it: 'This slot is reserved for Urgent / Same-day care until 8:00 AM today'."
    },
    {
        id: 72,
        category: "frontdesk",
        question: "How do I configure foster care or third-party guarantor accounts?",
        answer: "In the Registration workspace, navigate to the Guarantor Accounts screen. Create a new guarantor account of type 'Third-Party' or 'State/County'. Set the State Foster Care Agency as the guarantor and input the case worker's details, ensuring billing goes to the state.",
        example: "A foster child is registered. Create an 'Agency Guarantor' account for the state DHS, and unlink the foster parents' personal finances from the child's bills."
    },
    {
        id: 73,
        category: "frontdesk",
        question: "How do I print and track physical chart location labels?",
        answer: "For clinics that still maintain physical charts (e.g., for historic consent scans), use the Chart Tracking activity. Search the patient, click 'Print Label', and stick it to the physical file. Update the chart's 'Checked Out' location whenever it is moved.",
        example: "You pull an old paper file for review. Scan the barcode on the chart, set status to 'Out', and designate your office extension as the current location."
    },
    {
        id: 74,
        category: "frontdesk",
        question: "What is minor proxy access for MyChart, and what are the age thresholds?",
        answer: "Proxy access allows parents or legal guardians to view and manage their child's MyChart. For minors (under 12), full proxy is granted. For adolescents (12-17), state laws limit proxy access to maintain teen privacy (e.g., restricting views of reproductive care or mental health notes).",
        example: "A mother requests access to her 14-year-old son's MyChart. Register her as a proxy with 'Adolescent Proxy Access', which restricts her view of sensitive clinical notes."
    },
    {
        id: 75,
        category: "clinical",
        question: "Where do I document Chronic Care Management (CCM) time tracking?",
        answer: "Document CCM time (non-face-to-face care coordination) in the CCM Time Tracking activity or flowsheet. Record the duration in minutes, detail the activities performed (e.g., calling specialists, reviewing logs), and select the billing code once 20 minutes are reached.",
        example: "A care coordinator spends 15 minutes reviewing a diabetic patient's home glucose logs and 10 minutes coordinating a home health referral. They document 25 minutes of CCM time."
    },
    {
        id: 76,
        category: "clinical",
        question: "How do I close the loop on outstanding specialist referral orders?",
        answer: "Open the Referral console in Epic. Locate the outbound referral. Once the specialist's consult note is received (via Care Everywhere or scanned media), attach the document to the referral order and update the referral status to 'Closed / Completed'.",
        example: "You receive a scanned report from an outside orthopedist. Link the scan to the pending orthopedic referral order, changing the referral status to 'Closed'."
    },
    {
        id: 77,
        category: "clinical",
        question: "What is the difference between a Telephone Encounter and an Office Visit?",
        answer: "A Telephone Encounter is a non-face-to-face workflow used to document phone advice, triage, or medication adjustments. Unlike Office Visits, they do not generate standard E&M encounter charges unless specific time-based tele-health billing criteria are met.",
        example: "A patient calls with questions about lab results. Open a Telephone Encounter to document the discussion, route it to the PCP, and sign without generating a co-pay claim."
    },
    {
        id: 78,
        category: "clinical",
        question: "How do dental clinics document HRSA clinical indicators in OCHIN?",
        answer: "OCHIN dental providers use Wisdom (Epic's dental module) or structured SmartForms. Complete the dental caries risk assessment and document topical fluoride or sealant applications. The system automatically tags these dental codes for annual UDS report metrics.",
        example: "In Wisdom, mark sealants applied on first molars. The system automatically logs the code for UDS Clinical Quality Measure 'Dental sealants for children'."
    },
    {
        id: 79,
        category: "clinical",
        question: "What are Clinical Quality Measures (CQMs) and how are they tracked in the chart?",
        answer: "CQMs track the quality of care provided (e.g., percentage of diabetic patients with A1c < 9.0%). They appear as alerts or icons in the Health Maintenance or Quality sidebar panel. If a patient is overdue for a CQM measure, it shows as red or 'Overdue'.",
        example: "A patient's Health Maintenance shows 'Colorectal Cancer Screening - Overdue' in red. Discuss screening options with the patient and place the appropriate order."
    },
    {
        id: 80,
        category: "billing",
        question: "How do I handle a claim denial with reason code CO-16 (Claim lacks info)?",
        answer: "Look up the claim in the Denial Workqueue. Open the payer rejection details to see what specific information is missing (e.g., missing modifier, incorrect date of birth, or incorrect subscriber ID). Correct the information in registration or charging, and click 'Resubmit'.",
        example: "A claim is denied under CO-16. Reviewing the rejection shows the subscriber ID is missing a prefix. Edit the coverage details, add the prefix, and click 'Resubmit'."
    },
    {
        id: 81,
        category: "clinical",
        question: "How do I troubleshoot a vaccine registry transmission error?",
        answer: "Check the 'Immunization Errors' folder in your InBasket. Common errors include a missing patient address, invalid zip code, or mismatched mother's maiden name. Correct the patient demographics in registration, click 'Re-transmit' in the vaccine log, and verify the status changes to 'Transmitted'.",
        example: "A vaccine shows an registry error because of a blank county field. Update the county in registration, then click 'Retry Registry Send' in the Immunizations workspace."
    },
    {
        id: 82,
        category: "general",
        question: "How do I create a System Patient List for my clinic's providers?",
        answer: "Open the Patient Lists activity. Right-click 'My Personal Lists' and select 'Create List'. Set rules based on 'Location' and 'Provider'. Epic dynamically updates this list to show all patients currently checked into your clinic department or scheduled for the day.",
        example: "Create a list filtered by 'Provider = Dr. Smith' and 'Status = Arrived'. The list automatically populates with Dr. Smith's patients as they check in."
    },
    {
        id: 83,
        category: "clinical",
        question: "How do I document medications a patient is taking that were prescribed elsewhere?",
        answer: "In the Medication Reconciliation screen, click 'Add Medication'. Search for the drug. Select the checkbox marked 'Reported by Patient' or 'Prescribed Elsewhere'. This places the drug on their active list with a status of 'Reported' rather than 'Prescribed', indicating it did not originate at your clinic.",
        example: "A patient reports taking Levothyroxine prescribed by a prior endocrinologist. Add it to the list, selecting 'Reported by patient' to note the external source."
    },
    {
        id: 84,
        category: "clinical",
        question: "What is Order Reconciliation and when must it be completed?",
        answer: "Order Reconciliation occurs during transitions of care (admission, discharge, or transfer between clinics). It requires you to reconcile pre-existing home medications with newly ordered treatments. You must choose which medications to continue, modify, or discontinue.",
        example: "During discharge post-procedure, open Discharge Order Reconciliation. Select which home anti-hypertensives to resume and which to temporarily hold."
    },
    {
        id: 85,
        category: "clinical",
        question: "Can I temporarily override a Health Maintenance topic that is clinically inappropriate?",
        answer: "Yes. In the Health Maintenance activity, select the topic (e.g. Cervical Cancer Screening) and click 'Postpone' or 'Override'. Select a clinical reason (e.g., 'Previous complete hysterectomy') and specify the duration. This suppresses the alert from firing.",
        example: "Postpone a colonoscopy alert for a terminal patient by selecting 'Postpone - Clinical contraindication' to stop the alerts from prompting the team."
    },
    {
        id: 86,
        category: "clinical",
        question: "How do I reconcile Care Everywhere data directly into the patient's active chart?",
        answer: "Open the Care Everywhere Reconciliation screen. Outside diagnoses, allergies, and medications are shown side-by-side with local data. Click the 'Import' button next to any external record (e.g. a verified allergy) to write it directly to the active OCHIN chart.",
        example: "Reconciliation displays an allergy to Sulfa documented by an outside system. Click 'Add to Chart' to import it into your local list."
    },
    {
        id: 87,
        category: "clinical",
        question: "What is the correct template for documenting phone refills?",
        answer: "Open a Telephone Encounter. Type '.rxrefilltele' or load the 'Telephone Medication Refill' SmartText. This template prompts you to document the patient's adherence, pharmacy details, authorizing provider, and confirmation of recent lab values.",
        example: "A patient calls requesting a thyroid refill. Document: 'Adherent: Yes. Pharmacy: CVS. Last TSH: 1.8 on 3/12/2026. Attending provider: Dr. Smith'."
    },
    {
        id: 88,
        category: "clinical",
        question: "How do I pull a list of the patient's active referrals into a progress note?",
        answer: "Use the SmartLink <code>@REFERRALS@</code> or <code>@ACTREFERRALS@</code>. When typed inside your note, Epic evaluates the patient's referral database and prints a table of active authorizations, specialties, and remaining visit balances.",
        example: "Type 'Review of active specialty care: @ACTREFERRALS@' to automatically print a table showing an open referral to Orthopedics."
    },
    {
        id: 89,
        category: "general",
        question: "Can patients send photos or PDF documents via MyChart secure messaging?",
        answer: "Yes. Patients can attach photos or documents to MyChart messages. These arrive in your InBasket Patient Messages folder. When you review the message, click 'Save to Chart' to file the image permanently in the patient's Media Manager.",
        example: "A patient attaches a photo of a skin rash. The triage nurse reviews it in the InBasket, clicks 'File to Chart', and routes it to the dermatologist."
    },
    {
        id: 90,
        category: "clinical",
        question: "Where do I document vaccine adverse reactions in OCHIN Epic?",
        answer: "Open the Immunizations activity. Select the administered vaccine and click 'Adverse Reaction'. Enter the reaction details (e.g., localized swelling, fever), onset time, and severity. Epic automatically files this to the patient's allergy list and alerts future admin screens.",
        example: "A patient returns with severe swelling at a flu shot site. Record this in the immunization history to prevent automated ordering next season."
    },
    {
        id: 91,
        category: "billing",
        question: "How do I apply a sliding scale nominal fee override for a dental visit?",
        answer: "In dental accounts (Wisdom), if the dental treatment is not covered under the standard sliding scale nominal fee, open the Fee Override screen. Select the approved SFS dental discount schedule. The system applies the dental sliding scale percentage discount to the balance.",
        example: "A root canal costs $300. The patient is Tier B SFS (50% dental discount). Override the standard fee to apply the 50% adjustment, leaving a $150 balance."
    },
    {
        id: 92,
        category: "billing",
        question: "What happens to outstanding account balances during a duplicate chart merge?",
        answer: "When two duplicate charts are merged, the OCHIN database merging engine automatically moves all guarantor accounts, encounter charges, and outstanding balances from the source chart to the target (primary) chart, consolidating the debt history.",
        example: "Chart A has a $50 balance and Chart B has a $20 balance. Once merged into Chart A, the unified billing profile shows a combined $70 guarantor balance."
    },
    {
        id: 93,
        category: "billing",
        question: "Does OCHIN Epic support a prompt-payment discount for self-pay patients?",
        answer: "Yes, if configured in your clinic's billing guidelines. At checkout, if an uninsured patient pays their balance in full, check the 'Prompt Pay Discount' box in the payment screen. The system applies the pre-configured percentage discount (e.g., 20%) to the charge.",
        example: "A patient owes $100. They pay cash on the spot. Apply the 20% Prompt Pay discount. The system writes off $20, and the clerk posts the $80 payment."
    },
    {
        id: 94,
        category: "billing",
        question: "How do I upload a physical copy of a prior authorization letter to an order?",
        answer: "In the Referral or Order Authorization screen, select the order. Click 'Media Manager' or 'Scan Document'. Select your scanner source or upload the PDF file. Set the document type to 'Prior Authorization Letter' to link the file permanently to the claim.",
        example: "You scan the physical approval letter received from BlueCross. Link it to the MRI order so the billing team can attach it to the claim submission."
    },
    {
        id: 95,
        category: "general",
        question: "What happens during OCHIN Epic quarterly upgrade days?",
        answer: "Epic is upgraded quarterly to introduce new features. On upgrade days, expect brief system read-only periods (typically early Sunday mornings). Look out for the 'What's New' learning modules in your Epic home dashboard to read about layout and button changes.",
        example: "Logging in after upgrade day, you notice a new 'QuickActions' menu in your InBasket toolbar, highlighted in yellow with a learning tooltip."
    },
    {
        id: 96,
        category: "general",
        question: "What is the role of an OCHIN Super User at Go-Live?",
        answer: "Super Users are clinic staff who received advanced training. During Go-Live, they wear identifiable badges (usually bright lanyards) and walk the floor to resolve immediate issues, reset basic settings, and help staff navigate new workflows without submitting IT tickets.",
        example: "A provider gets blocked trying to sign a visit. A nearby Super User walks over, identifies the missing billing diagnosis, and shows them how to link it."
    },
    {
        id: 97,
        category: "general",
        question: "How do I reset my OCHIN password if I am locked out?",
        answer: "Click the 'Reset Password' link on the Citrix login portal. Answer your security questions or request a verification code sent to your registered mobile number. If you are still locked out, call the OCHIN Service Desk or your clinic's internal IT help desk.",
        example: "You enter your password incorrectly 5 times. Click 'Forgot Password', input the code texted to your phone, and establish a new compliant password."
    },
    {
        id: 98,
        category: "general",
        question: "When does MyChart proxy access for parent-child accounts expire?",
        answer: "Proxy access for parents automatically expires or changes status when the child turns 12 and 18. This is triggered by system age calculations to maintain teen privacy. Schedulers receive alerts to renew or change proxy permissions at checking.",
        example: "On a child's 12th birthday, the parent's full MyChart proxy access automatically transitions to 'Adolescent Proxy Access', hiding reproductive clinical notes."
    },
    {
        id: 99,
        category: "general",
        question: "Where can I find additional training materials and job aids for OCHIN Epic?",
        answer: "Access the OCHIN Learning Exchange (OLE) portal via your clinic's intranet or the link inside Epic's help menu. OLE contains step-by-step PDF job aids, interactive clinical scenarios, and role-based training curriculums.",
        example: "Search 'SFS intake' in the OLE library to print a one-page PDF cheat sheet detailing sliding scale registration steps."
    },
    {
        id: 100,
        category: "general",
        question: "What is the final Go-Live readiness check for new users?",
        answer: "Before your first live clinic shift, verify: 1) Your Duo security token is active on your phone. 2) You can successfully log in to Citrix. 3) You can open the live Epic PRD (Production) environment. 4) Your default department/login group matches your clinic assignment.",
        example: "Log in 15 minutes early on Go-Live morning. Verify your schedule display shows today's correct providers and you can see active patients checking in."
    }
];




