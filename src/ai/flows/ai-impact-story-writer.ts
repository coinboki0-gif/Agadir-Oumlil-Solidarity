'use server';
/**
 * @fileOverview An AI agent to draft compelling and emotionally resonant impact stories for the testimonial section.
 *
 * - draftImpactStory - A function that handles the generation of an impact story.
 * - AIStoryWriterForImpactTestimonialsInput - The input type for the draftImpactStory function.
 * - AIStoryWriterForImpactTestimonialsOutput - The return type for the draftImpactStory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIStoryWriterForImpactTestimonialsInputSchema = z.object({
  storyDetails: z
    .string()
    .describe(
      'Raw beneficiary notes or general information about an impact story.'
    ),
});
export type AIStoryWriterForImpactTestimonialsInput = z.infer<
  typeof AIStoryWriterForImpactTestimonialsInputSchema
>;

const AIStoryWriterForImpactTestimonialsOutputSchema = z.object({
  impactStory: z
    .string()
    .describe(
      'A compelling and emotionally resonant impact story suitable for a testimonial section.'
    ),
});
export type AIStoryWriterForImpactTestimonialsOutput = z.infer<
  typeof AIStoryWriterForImpactTestimonialsOutputSchema
>;

export async function draftImpactStory(
  input: AIStoryWriterForImpactTestimonialsInput
): Promise<AIStoryWriterForImpactTestimonialsOutput> {
  return draftImpactStoryFlow(input);
}

const draftImpactStoryPrompt = ai.definePrompt({
  name: 'draftImpactStoryPrompt',
  input: {schema: AIStoryWriterForImpactTestimonialsInputSchema},
  output: {schema: AIStoryWriterForImpactTestimonialsOutputSchema},
  prompt: `You are a skilled storyteller and content creator for the non-profit organization "Association Agadir Oumlil for Development and Solidarity".

Your task is to transform the provided details into a compelling, emotionally resonant impact story suitable for the testimonial section of our website. The story should highlight the positive change brought about by the NGO's work in areas such as health, education, housing, clean water, or humanitarian aid, serving vulnerable communities in Douar Anrouz, Taroudant Province.

Ensure the story is:
- Dignified and respectful of the beneficiaries.
- Focuses on the human element and the tangible transformation.
- Inspiring and conveys a message of hope and gratitude.
- Concise and engaging, suitable for a website testimonial.

Use the following details as the basis for the story:

Details: {{{storyDetails}}}`,
});

const draftImpactStoryFlow = ai.defineFlow(
  {
    name: 'draftImpactStoryFlow',
    inputSchema: AIStoryWriterForImpactTestimonialsInputSchema,
    outputSchema: AIStoryWriterForImpactTestimonialsOutputSchema,
  },
  async (input) => {
    const {output} = await draftImpactStoryPrompt(input);
    return output!;
  }
);
