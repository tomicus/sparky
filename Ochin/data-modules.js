const trainingModules = [
    {
        id: "module-1",
        title: "Module 1: OCHIN Epic Foundations",
        description: "Understand the shared database architecture, collaborative governance, and why safety-net clinics operate differently in OCHIN.",
        pages: [
            {
                title: "1. The OCHIN Collaborative Database Model",
                content: `
                    <h2>The Shared Database Instance</h2>
                    <p>In standard "Full Epic" deployments, a healthcare system has its own isolated sandbox and database. However, OCHIN Epic uses a <strong>collaborative single-instance database</strong> shared by hundreds of FQHCs (Federally Qualified Health Centers), community clinics, and safety-net organizations across the country.</p>
                    
                    <div class="info-card">
                        <h4><span class="material-icons-round">info</span>Why this matters:</h4>
                        <p>When you edit a patient's address, medication list, or allergies at Clinic A, that update is immediately live and visible to clinicians at Clinic B who also use OCHIN Epic, without needing Care Everywhere transfers.</p>
                    </div>

                    <p>Because of this shared structure, security, master file changes, and template modifications are managed centrally by OCHIN analysts rather than locally at individual clinics.</p>
                `
            },
            {
                title: "2. The Shared Patient Record & Duplication Risks",
                content: `
                    <h2>One Patient, One Chart</h2>
                    <p>Because the database is collaborative, the patient list is shared. When a new patient arrives at your clinic, they may already exist in the OCHIN system from a different member clinic.</p>
                    
                    <p>Creating a duplicate chart is one of the most critical front-desk errors. To prevent duplicates, you must follow the <strong>OCHIN Search Strategy</strong>:</p>
                    
                    <ul class="steps-list">
                        <li><strong>Step 1:</strong> Always search by spelling the first 3 letters of the Last Name and the first 3 letters of the First Name (e.g., "SMI, JOH" for John Smith).</li>
                        <li><strong>Step 2:</strong> Input the Date of Birth (DOB).</li>
                        <li><strong>Step 3:</strong> If no match occurs, widen the search or search by Social Security Number (SSN) or Phone Number before creating a new record.</li>
                    </ul>

                    <div class="info-card">
                        <h4><span class="material-icons-round">warning</span>Important:</h4>
                        <p>If you create a duplicate chart, clinical documentation, billing records, and medication histories will be split. Alert your clinic's Super User or data steward to initiate a chart merge if a duplicate is found.</p>
                    </div>
                `
            },
            {
                title: "3. Shared Preference Lists & Smart Tools",
                content: `
                    <h2>Leveraging Collaborative Build</h2>
                    <p>Building templates and lists from scratch is time-consuming. OCHIN Epic utilizes <strong>shared master files</strong> for medications, laboratory tests, and imaging procedures, allowing standardized ordering pathways.</p>
                    
                    <p>To documentation and workflow efficiency, OCHIN Epic provides:</p>
                    <ul class="steps-list">
                        <li><strong>SmartPhrases (.phrases):</strong> Shared macros that pull text summaries or templates into notes. You can write your own or copy shared OCHIN-approved SmartPhrases.</li>
                        <li><strong>SmartTexts:</strong> Preconfigured templates for structured visit documentation (e.g., Well Child Exams).</li>
                        <li><strong>Shared Preference Lists:</strong> Standardized diagnostic and medication ordering options configured specifically to meet safety-net clinic guidelines.</li>
                    </ul>
                `
            },
            {
                title: "4. Collective System Governance",
                content: `
                    <h2>The OCHIN Governance Structure</h2>
                    <p>A common point of frustration for staff new to OCHIN Epic is the inability to make rapid, custom modifications to the system. In full Epic, a local IT team can rewrite templates instantly.</p>
                    
                    <p>In OCHIN, any modification to clinical templates, billing workflows, or system-wide settings must undergo <strong>Collaborative Governance review</strong>. Clinicians and operators from various clinics vote on proposed updates to ensure changes do not adversely affect other members sharing the database.</p>

                    <div class="info-card">
                        <h4><span class="material-icons-round">settings</span>Submitting Feedback:</h4>
                        <p>Request changes through your local OCHIN Site Specialist (OSS). They will submit a ticket to the OCHIN committee for review, testing, and implementation.</p>
                    </div>
                `
            }
        ]
    },
    {
        id: "module-2",
        title: "Module 2: Patient Registration & Check-In (FQHC Focus)",
        description: "Master the administrative workflow including sliding fee scales, UDS reporting, and insurance coverage verification.",
        pages: [
            {
                title: "1. The FQHC Check-In Workflow",
                content: `
                    <h2>Welcome and Intake</h2>
                    <p>Safety-net clinics and FQHCs have distinct regulatory check-in requirements compared to private health systems. The intake process is not just about collecting insurance cards; it is about assessing demographic eligibility and federal reporting compliance.</p>
                    
                    <p>The core check-in workflow involves:</p>
                    <ul class="steps-list">
                        <li>Running a thorough patient search (as detailed in Module 1).</li>
                        <li>Verifying current demographic details.</li>
                        <li>Scanning photo IDs and physical insurance cards.</li>
                        <li>Collecting consent signatures (Treatment Consent, HIPAA Privacy, and FQHC Rights).</li>
                    </ul>
                `
            },
            {
                title: "2. Sliding Fee Scales (SFS) Setup",
                content: `
                    <h2>Applying FQHC Sliding Fees</h2>
                    <p>To comply with Health Resources and Services Administration (HRSA) regulations, FQHCs must offer a Sliding Fee Scale to patients based on family size and annual household income.</p>
                    
                    <p>Configuring the SFS in OCHIN Epic:</p>
                    <ul class="steps-list">
                        <li><strong>Determine Income:</strong> Document the patient's verified annual income and family size in the SFS screen.</li>
                        <li><strong>Select SFS Category:</strong> The system automatically maps this data to the correct sliding scale tier (e.g., Tier A: Nominal Fee, Tier B: 20% payment, etc.).</li>
                        <li><strong>Guarantor Accounts:</strong> Attach the sliding fee scale plan to the patient's self-pay guarantor account.</li>
                    </ul>

                    <div class="info-card">
                        <h4><span class="material-icons-round">monetization_on</span>Co-pays:</h4>
                        <p>The sliding scale co-pay (e.g., $10 or $15 nominal fee) should be collected at check-in. This acts as the patient's co-pay for clinical services, labs, or pharmacy prescriptions.</p>
                    </div>
                `
            },
            {
                title: "3. Mandatory UDS demographic collection",
                content: `
                    <h2>Uniform Data System (UDS) Fields</h2>
                    <p>HRSA requires annual reporting of specific patient demographics. Collecting this information accurately during registration is a core responsibility for OCHIN front desk staff.</p>
                    
                    <p>Ensure the following fields are updated in the registration screen:</p>
                    <ul class="steps-list">
                        <li><strong>Gender Identity & Sexual Orientation (SOGI):</strong> Ask and document these values using patient-centered language.</li>
                        <li><strong>Housing Status:</strong> Mark if the patient is housed, homeless (shelter, transitional, street), or in public housing.</li>
                        <li><strong>Agricultural Worker Status:</strong> Document if the patient or an immediate family member is a migrant or seasonal farmworker.</li>
                        <li><strong>Federal Poverty Level (FPL):</strong> Calculated automatically based on the SFS family size and income inputs.</li>
                    </ul>
                `
            },
            {
                title: "4. Completing Check-In & Alerting clinical staff",
                content: `
                    <h2>Setting the Patient Status</h2>
                    <p>Once paperwork is signed, insurance/SFS is active, and copays are handled, you must change the patient's appointment status in the Schedule.</p>
                    
                    <p>Select the patient and click <strong>Check In</strong>. This updates their status to <strong>"Arrived"</strong> or <strong>"Waiting"</strong> on the clinic tracking board, notifying nurses and medical assistants that the patient is ready to be roomed.</p>
                    
                    <div class="info-card">
                        <h4><span class="material-icons-round">check_circle</span>Checklist Completed:</h4>
                        <p>Ensure a printed patient label and the routing sheet (if used by your clinic) are placed in the designated folder or tray.</p>
                    </div>
                `
            }
        ]
    },
    {
        id: "module-3",
        title: "Module 3: Clinical Rooming & Documentation",
        description: "Master patient intake workflows, vitals documenting, visit navigator tools, and efficiency shortcuts like SmartPhrases.",
        pages: [
            {
                title: "1. Clinical Rooming flowsheets",
                content: `
                    <h2>The Intake Phase</h2>
                    <p>When a nurse or medical assistant (MA) brings a patient back, they room the patient using the <strong>Rooming Activity Navigator</strong>. This contains flowsheets to record clinical baselines.</p>
                    
                    <p>Key sections to complete:</p>
                    <ul class="steps-list">
                        <li><strong>Vitals Flowsheet:</strong> Enter BP, heart rate, temperature, height, weight, and respiratory rate. If a value is critically high or low, OCHIN Epic will color-code it automatically.</li>
                        <li><strong>Screenings:</strong> FQHC guidelines mandate periodic screenings (e.g., PHQ-2/PHQ-9 for Depression, Tobacco Use, Alcohol Use, IPV). Record these within their respective flowsheet cells.</li>
                        <li><strong>Chief Complaint:</strong> Document the primary reason the patient is seeking care today in their own words.</li>
                    </ul>
                `
            },
            {
                title: "2. The Visit Navigator & SmartForms",
                content: `
                    <h2>Navigating the Patient Encounter</h2>
                    <p>The <strong>Visit Navigator</strong> acts as a checklist for your clinical documentation. It changes layouts depending on your login role (e.g., Nurse vs. Provider) and the department specialty.</p>
                    
                    <p>Within the Navigator, you will find <strong>SmartForms</strong>—highly interactive, structured questionnaires that calculate scores or document specific procedures dynamically.</p>

                    <div class="info-card">
                        <h4><span class="material-icons-round">psychology</span>Screening SmartForms:</h4>
                        <p>For example, if a patient answers positively to the PHQ-2 depression screening, the system will dynamically expand the PHQ-9 questionnaire within the SmartForm to gather full clinical severity details.</p>
                    </div>
                `
            },
            {
                title: "3. Speeding Up Notes with SmartTools",
                content: `
                    <h2>Writing Efficient Notes</h2>
                    <p>Epic provides four main types of <strong>SmartTools</strong> to minimize typing and prevent clerical fatigue during charting:</p>
                    
                    <ul class="steps-list">
                        <li><strong>SmartPhrases (.phrase):</strong> Expand typing macros (e.g., typing <code>.rosnegative</code> to print a normal multi-system Review of Systems).</li>
                        <li><strong>SmartLinks (@link@):</strong> Pull data directly from other parts of the chart (e.g., <code>@VS@</code> pulls today's vitals; <code>@AGE@</code> pulls the age).</li>
                        <li><strong>SmartLists {list}:</strong> Multiple-choice dropdown lists inside notes. Left-click to select options, right-click to choose and close.</li>
                        <li><strong>Wildcards (***):</strong> Placeholders for free-text. Press <strong>F2</strong> on your keyboard to instantly jump to the next set of wildcards.</li>
                    </ul>

                    <div class="info-card">
                        <h4><span class="material-icons-round">keyboard</span>Keyboard Pro-Tip:</h4>
                        <p>Keep your hands on the keyboard! Type your note, use <strong>F2</strong> to jump to a SmartList, use space/arrow keys to select options, and press <strong>F2</strong> again to continue.</p>
                    </div>
                `
            },
            {
                title: "4. Finalizing and Routing the Encounter",
                content: `
                    <h2>Closing the Visit Loop</h2>
                    <p>Once clinical work is done, the charting must be finalized. For providers, this involves:</p>
                    <ul class="steps-list">
                        <li>Adding the correct <strong>Level of Service (LOS)</strong> billing codes (e.g., 99213, 99214).</li>
                        <li>Associating every diagnosis with a corresponding order or procedure.</li>
                        <li>Signing the visit note.</li>
                    </ul>

                    <div class="info-card">
                        <h4><span class="material-icons-round">forward_to_inbox</span>Chart Routing:</h4>
                        <p>For MAs and residents, clinical notes must be routed to the attending or supervising physician for co-signature. Click <strong>Route Chart</strong>, search for the provider, select 'Co-signature Required', and sign.</p>
                    </div>
                `
            }
        ]
    },
    {
        id: "module-4",
        title: "Module 4: Order Entry, E-Prescribing, & InBasket",
        description: "Configure medication and lab orders, resolve Surescripts routing errors, manage EPCS, and navigate your InBasket queues.",
        pages: [
            {
                title: "1. The Order Entry Activity",
                content: `
                    <h2>Entering Orders in OCHIN Epic</h2>
                    <p>To order medications, labs, imaging, or referrals, open the <strong>Meds & Orders</strong> section of the Visit Navigator. Orders are classified into two pools: <strong>Facility Preference Lists</strong> and the <strong>Full OCHIN Database</strong>.</p>
                    
                    <ul class="steps-list">
                        <li><strong>Preference List:</strong> Checked by default. This lists medications and tests commonly stocked or ordered within your specific clinic or department.</li>
                        <li><strong>Database Search:</strong> If a specialty medication or lab is missing, click the <em>Database Search</em> tab to query the entire OCHIN system master files.</li>
                    </ul>

                    <div class="info-card">
                        <h4><span class="material-icons-round">link</span>Order Association:</h4>
                        <p>Before an order can be signed, you must associate it with a diagnosis code. Click the diagnosis checkbox next to the order in the shopping cart panel.</p>
                    </div>
                `
            },
            {
                title: "2. E-Prescribing & Pharmacy Routing",
                content: `
                    <h2>Selecting and Verifying Pharmacies</h2>
                    <p>OCHIN Epic uses Surescripts to route prescriptions electronically. During order entry, you must verify the patient's preferred pharmacy.</p>
                    
                    <p>Routing options include:</p>
                    <ul class="steps-list">
                        <li><strong>E-Scribe (Default):</strong> Sent securely in real-time. Verify that the pharmacy details show a green 'Active' icon for e-prescribing.</li>
                        <li><strong>Print:</strong> Used for pharmacies that do not accept e-scribe or if the system is down. Prints directly to your clinic's prescription printer.</li>
                        <li><strong>EPCS (Controlled Substances):</strong> Requires a dual-factor cryptographic key (e.g., Duo or VIP Access token) and entering your NPI/DEA authorization during the signing step.</li>
                    </ul>
                `
            },
            {
                title: "3. Med Rec & Refill Workflows",
                content: `
                    <h2>Processing Refills from InBasket</h2>
                    <p>Prescription refill requests arrive in your InBasket directly from retail pharmacies. Rather than creating a new chart note, providers and nurses process these within the InBasket interface using the **Rx Refills** workspace.</p>
                    
                    <ul class="steps-list">
                        <li>Open the InBasket message to view the requested drug and historical dosage history.</li>
                        <li>Click <strong>Med Rec</strong> to check the patient's adherence and recent lab values (e.g., check potassium levels before refilling Lisinopril).</li>
                        <li>Select **Approve** (routes back to the pharmacy via e-scribe), **Refuse** (prompts a reason letter to the patient), or **Change** (opens order edit).</li>
                    </ul>
                `
            },
            {
                title: "4. Navigating InBasket Folders",
                content: `
                    <h2>InBasket Management</h2>
                    <p>The InBasket is your EHR inbox. To prevent backlog, check your InBasket at least twice daily. OCHIN folders include:</p>
                    
                    <ul class="steps-list">
                        <li><strong>Patient Messages:</strong> Queries submitted by patients via MyChart. Responding creates a record in the chart.</li>
                        <li><strong>Results:</strong> Completed lab work or pathology reports. You must review, add a result note, and choose if you want to release the result to MyChart.</li>
                        <li><strong>Co-sign:</strong> Attestation queues for orders placed by MAs, students, or residents under your supervision.</li>
                    </ul>

                    <div class="info-card">
                        <h4><span class="material-icons-round">check_circle</span>Folder Maintenance:</h4>
                        <p>Always click <strong>Done</strong> (checkmark icon) on a message once actioned. This archives the message, removing it from your active queue.</p>
                    </div>
                `
            }
        ]
    },
    {
        id: "module-5",
        title: "Module 5: FQHC Billing, Coding, & UDS Reports",
        description: "Master level of service coding, G-code selection, sliding scale transaction postings, and claim edit resolutions.",
        pages: [
            {
                title: "1. FQHC Coding & Level of Service",
                content: `
                    <h2>E&M Codes for Community Health Centers</h2>
                    <p>In standard fee-for-service systems, billing is driven directly by CPT codes. In FQHCs, billing is based on a **Prospective Payment System (PPS)** or regional encounter rates. However, to justify these encounter rates, documentation must support the Level of Service (E&M) codes.</p>
                    
                    <p>Coding requirements:</p>
                    <ul class="steps-list">
                        <li><strong>99213 / 99214:</strong> Standard outpatient visit codes based on clinical complexity or total time spent on the date of encounter.</li>
                        <li><strong>FQHC G-Codes:</strong> Medicare and some Medicaid programs require specific G-codes (e.g., <code>G0467</code> for an established FQHC patient clinical visit) to trigger the correct flat PPS payment rate.</li>
                        <li><strong>Diagnostic Linkage:</strong> Every billing code must be linked to a primary diagnostic ICD-10 code demonstrating medical necessity.</li>
                    </ul>
                `
            },
            {
                title: "2. Charge Routing and Capture",
                content: `
                    <h2>From Chart to Claim</h2>
                    <p>When a clinician clicks **Sign Visit**, the encounter charges enter the **OCHIN Charge Router**. This background router verifies that clinical items map to corresponding billing codes before sending them to the claim queue.</p>
                    
                    <p>Understanding the routing cycle:</p>
                    <ul class="steps-list">
                        <li><strong>Clinical Entry:</strong> Clinician signs visit -> charges are generated.</li>
                        <li><strong>Router Evaluation:</strong> The system automatically evaluates billing rules (e.g. checks if a modifier is required for two procedures on the same day).</li>
                        <li><strong>Billing Workqueues (WQs):</strong> If charges pass all rules, they form a clean claim. If rules fail, the transaction stops in a billing workqueue for manual review.</li>
                    </ul>
                `
            },
            {
                title: "3. Sliding Fee Scale Transactions",
                content: `
                    <h2>Applying Adjustments at Checkout</h2>
                    <p>For self-pay or under-insured patients, the Sliding Fee Scale (SFS) determines their final balance. At checkout, the billing clerk processes these adjustments.</p>
                    
                    <ul class="steps-list">
                        <li>Open the Patient Balance workspace in OCHIN Epic.</li>
                        <li>Verify that the patient has an active SFS tier linked to their guarantor.</li>
                        <li>The system automatically calculates the sliding scale write-off adjustment based on the SFS contract rules.</li>
                        <li>Collect the remaining nominal fee copay (e.g., $15) and post the payment, printing a receipt for the patient.</li>
                    </ul>
                `
            },
            {
                title: "4. Claim Edit Workqueues",
                content: `
                    <h2>Resolving Billing Denials</h2>
                    <p>Billing staff use **Claim Edit Workqueues** to correct claims flagged with errors. Common OCHIN billing errors include:</p>
                    
                    <ul class="steps-list">
                        <li><strong>Missing Modifiers:</strong> For example, missing modifier <code>-25</code> when an E&M visit and a procedure (like an injection) occur on the same day.</li>
                        <li><strong>UDS Demographic Mismatch:</strong> Claims blocked because mandatory HRSA UDS fields (such as housing status or federal poverty tier) were left blank at registration.</li>
                        <li><strong>Guarantor Mismatch:</strong> Payer rejected because the claim was sent to the patient's personal insurance instead of their worker's comp or sliding scale guarantor.</li>
                    </ul>
                `
            }
        ]
    }
];
