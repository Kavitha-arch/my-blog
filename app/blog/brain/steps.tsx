import { ReactNode } from "react";

export type Step = {
  id: string;
  title: string;
  body: ReactNode;
};

export const steps = [
  {
    id: "visual-intake",
    title: "1. Visual intake",
    body: (
      <ul>
        <li>Eyes scan text on the screen.</li>
        <li>Visual cortex (occipital lobe) decodes shapes into words.</li>
        <li>This is neutral. No emotion yet.</li>
      </ul>
    ),
  },

  {
    id: "meaning-assignment",
    title: "2. Meaning assignment",
    body: (
      <>
        <ul>
          <li>Words are sent to language areas (temporal + frontal regions).</li>
          <li>
            The brain asks automatically:
            <br />
            <strong>“What does this mean for me?”</strong>
          </li>
        </ul>
        <p><em>This step happens before conscious thought.</em></p>
      </>
    ),
  },

  {
    id: "threat-appraisal",
    title: "3. Threat appraisal (milliseconds)",
    body: (
      <>
        <ul>
          <li>
            The message is routed to the <strong>amygdala</strong>{" "}
            <em>via a fast pathway</em>.
          </li>
          <li>
            The amygdala checks:
            <ul>
              <li>Is this disrespect?</li>
              <li>Is this unfair?</li>
              <li>Is my status / safety / control threatened?</li>
            </ul>
          </li>
        </ul>
        <p><strong>You are not aware of this yet.</strong></p>
      </>
    ),
  },

  {
    id: "amygdala-fires",
    title: "4. Amygdala fires",
    body: (
      <>
        <ul>
          <li>
            If threat is detected:
            <ul>
              <li>Amygdala activates hypothalamus.</li>
              <li>Hypothalamus triggers stress response.</li>
            </ul>
          </li>
        </ul>
        <p>This happens in <strong>~100–200 ms</strong>.</p>
      </>
    ),
  },

  {
    id: "body-chemistry",
    title: "5. Body chemistry shifts",
    body: (
      <>
        <ul>
          <li>Adrenaline + cortisol released.</li>
          <li>Heart rate increases.</li>
          <li>Blood shifts to muscles.</li>
          <li>Digestion pauses.</li>
          <li>Breathing becomes shallow.</li>
        </ul>
        <p>
          This is why the emotion feels <strong>physical</strong>.
        </p>
      </>
    ),
  },

  {
    id: "pfc-offline",
    title: "6. Prefrontal cortex goes offline (partially)",
    body: (
      <>
        <ul>
          <li>Blood flow reduces to the PFC.</li>
          <li>Inhibition weakens.</li>
          <li>Nuanced thinking becomes harder.</li>
        </ul>
        <blockquote>
          “I know better, but I can’t help it.”
        </blockquote>
      </>
    ),
  },

  {
    id: "emotion-consciousness",
    title: "7. Emotion enters consciousness",
    body: (
      <>
        <ul>
          <li>Now you <em>feel</em> anger.</li>
          <li>Tight jaw, heat, urgency.</li>
          <li>The emotion is already in motion.</li>
        </ul>
        <p>
          <strong>Important:</strong>
          <br />
          Feeling comes after activation, not before.
        </p>
      </>
    ),
  },

  {
    id: "narrative-creation",
    title: "8. Narrative creation",
    body: (
      <>
        <ul>
          <li>
            The brain generates a story:
            <ul>
              <li>“They’re disrespecting me.”</li>
              <li>“This always happens.”</li>
              <li>“I need to respond now.”</li>
            </ul>
          </li>
        </ul>
        <p>
          This story is not objective — it’s{" "}
          <strong>threat-biased</strong>.
        </p>
      </>
    ),
  },

  {
    id: "action-impulse",
    title: "9. Action impulse",
    body: (
      <>
        <ul>
          <li>
            Motor cortex prepares:
            <ul>
              <li>Type fast</li>
              <li>Defend</li>
              <li>Confront</li>
              <li>Withdraw</li>
            </ul>
          </li>
        </ul>
        <p>
          This urge feels <em>urgent</em> and{" "}
          <em>necessary</em>.
        </p>
      </>
    ),
  },

  {
    id: "two-paths",
    title: "10. Two possible paths",
    body: (
      <>
        <h4>Path A: No interruption</h4>
        <ul>
          <li>Impulse becomes action.</li>
          <li>Message is sent.</li>
          <li>Short-term relief.</li>
          <li>Long-term fallout or rumination.</li>
        </ul>

        <h4>Path B: Interruption occurs</h4>
        <p>Something interrupts the loop:</p>
        <ul>
          <li>A pause</li>
          <li>A breath</li>
          <li>Putting the phone down</li>
        </ul>
        <p>
          This must happen <strong>before action</strong>.
        </p>
      </>
    ),
  },

  {
    id: "intervention-window",
    title: "Where intervention actually occurs",
    body: (
      <>
        <p>
          Not at Step 3–6.<br />
          Those are automatic.
        </p>
        <p>
          Intervention begins <strong>after Step 7</strong>, when:
        </p>
        <ul>
          <li>You can feel the body.</li>
          <li>Awareness returns <em>slightly</em>.</li>
        </ul>
      </>
    ),
  },

  {
    id: "sensory-override",
    title: "11. Sensory override",
    body: (
      <>
        <ul>
          <li>Long exhale</li>
          <li>Drop shoulders</li>
          <li>Look away from screen</li>
        </ul>
        <blockquote>“No immediate danger.”</blockquote>
      </>
    ),
  },

  {
    id: "amygdala-reassessment",
    title: "12. Amygdala reassessment",
    body: (
      <>
        <ul>
          <li>Heart rate slows.</li>
          <li>Stress hormones begin to drop.</li>
          <li>Amygdala updates prediction.</li>
        </ul>
        <p>It doesn’t shut up — it loosens.</p>
      </>
    ),
  },

  {
    id: "pfc-returns",
    title: "13. Prefrontal cortex regains bandwidth",
    body: (
      <>
        <ul>
          <li>
            You can sequence:
            <ul>
              <li>“I don’t have to reply now.”</li>
              <li>“What’s the actual objective?”</li>
            </ul>
          </li>
        </ul>
        <p>
          Clarity returns <strong>after</strong> the body shifts.
        </p>
      </>
    ),
  },

  {
    id: "choice",
    title: "14. Choice becomes possible",
    body: (
      <>
        <p>Now you can choose:</p>
        <ul>
          <li>Respond later</li>
          <li>Respond calmly</li>
          <li>Not respond at all</li>
        </ul>
        <p>
          This is <strong>self-regulation</strong>.
        </p>
      </>
    ),
  },
];
