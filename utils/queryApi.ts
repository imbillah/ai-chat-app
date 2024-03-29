import openai from "./chatGpt";

const query = async (prompt: string, chatId: string, model: string) => {
  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res?.data?.choices[0]?.text)
    .catch(
      (err) => `Opps! I am unable to find the answer for that!! ${err.message}`
    );
  return res;
};

export default query;
