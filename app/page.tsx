import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <MaxWidthWrapper className="mt-10 flex flex-col items-center justify-center text-center sm:mt-12">
        <h1 className="max-w-4xl text-3xl font-black md:text-5xl lg:text-6xl">
          <span className="text-yellow-700">PersonalPT</span>: Your AI
          <br />
          <span className=" text-blue-500">Personal Trainer</span>
        </h1>

        <p className="mt-5 max-w-prose text-lg text-zinc-800 sm:text-xl md:text-2xl">
          <span className="font-semibold">PersonalPT</span> is an AI-driven
          platform designed to provide real-time feedback on exercise
          performance by analyzing user movements using a machine learning model
          that performs one-shot exercise repetition counting. The model is
          trained on individual exercise demonstrations provided by physical
          therapists, allowing for personalized and accurate assessment of form
          and technique across a wide range of physical therapy exercises.
        </p>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-foreground to-secondary-foreground opacity-30 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem] sm:translate-y-8"
            />
          </div>

          <div className="mx-auto flex w-full max-w-6xl justify-center px-6 lg:px-8">
            <div className="mt-8 flow-root w-full sm:mt-16">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <iframe
                  src="/demo.mp4?autoplay=1"
                  className="h-auto w-full rounded-md bg-special shadow-2xl ring-1 ring-gray-900/10"
                  style={{ aspectRatio: "16/9" }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative right-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-primary-foreground to-secondary-foreground opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] sm:translate-y-8"
            />
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Paper Abstract */}
      <MaxWidthWrapper className="mt-20">
        <h1 className="text-2xl font-bold text-blue-500 md:text-3xl">
          Paper Abstract
        </h1>
        <p className="text-justify text-zinc-950 md:text-lg">
          {
            "There are thousands of physical therapy exercises that can be customized to meet the specific rehabilitative needs of individual patients. This flexibility is essential for accommodating a patient's strength, range of motion, and progression over time. However, the vast array of exercises and their potential variations present a significant challenge for current evaluation and feedback methods, which are typically limited by their reliance on a small, predefined set of exercises. A critical function for automated exercise feedback is the ability to count repetitions accurately in real-time, which is essential for improving patient outcomes during at-home physical therapy. To address this, we introduce PersonalPT, an innovative smartphone-based application that empowers physical therapists to create tailored treatment plans with just one training example. Our one-shot repetition segmentation model allows for accurate repetition counting across any exercise, customized to the unique physical capabilities and rehabilitation requirements of individual patients. Our machine learning model has demonstrated superior performance over existing repetition counting algorithms, both semi-supervised and fully supervised, across three different exercise datasets. We validate the feasibility of employing computer vision and machine learning on a smartphone platform to deliver real-time repetition counting for various exercises, thereby enhancing the quality of at-home physical therapy."
          }
        </p>
      </MaxWidthWrapper>

      {/* Methods and Procedures */}
      <MaxWidthWrapper className="mt-20">
        <h1 className="text-2xl font-bold text-blue-500 md:text-3xl">
          Methods and Procedures
        </h1>
        <p className="text-justify text-zinc-950 md:text-lg">
          {
            "In developing PersonalPT, we focused on creating a system that allows physical therapists (PTs) to adapt and personalize exercise regimens based on continuous patient assessments. This personalization process involves several key steps. Initially, the PT creates a new exercise tailored to the patient's specific needs and records a video that demonstrates the correct form and technique across several repetitions. Following this, the PT manually labels the start and stop points of each repetition within the video using precise timestamps. These labeled video segments are then used to train the one-shot segmentation model, which learns to recognize the exercise pattern from just this single example. Once the model is trained, it is deployed in the PersonalPT app, allowing patients to view the instructional video and subsequently record their own attempts at the exercise. The system then uses the trained model to count repetitions in real-time, providing immediate feedback to the patient and detailed performance data to the PT. This approach not only enables accurate repetition counting but also supports the dynamic adjustment of exercise plans as patients progress in their rehabilitation."
          }
        </p>
      </MaxWidthWrapper>

      {/* Training and Model Fitting */}
      <MaxWidthWrapper className="mt-20">
        <h1 className="text-2xl font-bold text-blue-500 md:text-3xl">
          Training and Model Fitting
        </h1>
        <p className="text-justify text-zinc-950 md:text-lg">
          {
            "The training and fitting of the PersonalPT model involve several processes designed to ensure accurate and efficient performance. After a physical therapist records a video of a new exercise, the video is processed to extract 3D skeletal data using Mediapipe, an advanced human pose estimation algorithm. This step yields 33 key joint positions for each frame of the video, which are used to calculate the geometries of the human body in motion. These geometries include critical angles between adjacent and non-adjacent body segments, which are relevant to physical therapy. For instance, angles like the Right Elbow Angle (between the shoulder and wrist) are crucial for exercises targeting the upper limbs. The extracted angles are smoothed and then subjected to feature selection, where a recursive feature elimination (RFE) technique is used to identify the most relevant angles for the specific exercise being modeled. This selection reduces the complexity of the model by focusing only on the angles that significantly impact the exercise's movement pattern. The selected angles are further transformed into a 2D latent space using Principal Component Analysis (PCA), which simplifies the data while retaining the essential movement characteristics. A Gaussian Mixture Model (GMM) is then fitted to this latent space, learning the distribution of Resting (State R) and Active exertion (State A) states based on the provided training example. The GMM uses this bimodal distribution to predict whether the patient is in a Resting or Active state during each frame of the exercise. By analyzing the sequence of these states, the model accurately counts repetitions in real-time, ensuring that the feedback provided to the patient and PT is both timely and precise."
          }
        </p>
      </MaxWidthWrapper>

      {/* Results */}
      <MaxWidthWrapper className="mt-20">
        <h1 className="text-2xl font-bold text-blue-500 md:text-3xl">
          Results
        </h1>
        <p className="text-justify text-zinc-950 md:text-lg">
          {
            "Our extensive experiments and comparisons across three different datasets have demonstrated that the PersonalPT model significantly outperforms existing state-of-the-art models for repetitive action counting (RAC). We evaluated our model using two primary metrics: Off-by-One (OBO) accuracy, which measures the percentage of test videos where the predicted repetition count is within one of the ground truth, and Mean Absolute Error (MAE), which quantifies the average deviation between predicted and actual repetition counts. The datasets used in our evaluation include the Fit3D dataset, the RepCount dataset, and our custom Variations dataset, each presenting unique challenges and representing different physical therapy scenarios. Our model showed exceptional performance on the Variations dataset, which is most reflective of real-world, in-home physical therapy conditions, with an OBO accuracy of 81% and an MAE of 0.99. These results indicate the model's robust generalization capabilities across different exercises and patient demographics. While the model also performed well on the controlled Fit3D dataset, achieving an OBO accuracy of 72%, it faced greater challenges on the RepCount dataset due to the diversity of exercise types and camera angles. Nevertheless, even in these more difficult conditions, the PersonalPT model maintained competitive accuracy, outperforming traditional RAC models like TransRAC and Gesture-Based Dynamic Time Warping (GB-DTW). Our findings underscore the efficacy of our one-shot approach for RAC in the context of physical therapy, particularly for exercises performed in non-laboratory settings."
          }
        </p>
      </MaxWidthWrapper>

      {/* Conclusion and Future Work */}
      <MaxWidthWrapper className="mt-20">
        <h1 className="text-2xl font-bold text-blue-500 md:text-3xl">
          Conclusion and Future Work
        </h1>
        <p className="text-justify text-zinc-950 md:text-lg">
          {
            "PersonalPT represents a significant advancement in the field of automated exercise evaluation, particularly for physical therapy applications. Our one-shot repetition counting model, designed to be trained on a single example, provides a scalable and flexible solution that can be tailored to the specific needs of individual patients. The model's ability to run in real-time on mobile devices makes it accessible and practical for at-home use, where patients can receive immediate feedback on their exercise performance. This capability is crucial for improving patient adherence to prescribed exercise regimens, thereby enhancing rehabilitation outcomes. However, while our current model demonstrates strong performance, there are several avenues for future research and development. One key area for improvement is the enhancement of 3D human pose estimation models, which are foundational to the accuracy of our approach. Future versions of PersonalPT could also incorporate automated video trimming to eliminate the need for manual intervention by PTs, further streamlining the workflow. Additionally, expanding the model's applicability to a broader range of exercises and testing it on more diverse subject populations, including those with varying body types and physical abilities, will be essential for ensuring its robustness and generalizability. Finally, integrating features that detect the start and end of exercises autonomously will make the system even more user-friendly and effective in real-world settings. As we continue to refine and expand, we aim to provide a comprehensive tool that supports both patients and physical therapists in achieving optimal rehabilitation outcomes."
          }
        </p>
      </MaxWidthWrapper>

      <Footer />
    </>
  );
}
