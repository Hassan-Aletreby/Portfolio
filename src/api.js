import axios from "axios";

const supabaseUrl = "https://vwkpkpzqzzegpyhfazyt.supabase.co";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3a3BrcHpxenplZ3B5aGZhenl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4OTY3MDEsImV4cCI6MjA2MjQ3MjcwMX0.woRNY91vZ6M28VIeR4pEvR3R1nGbl8q-jOEYJnjLoBA";

export const fetchProjects = async () => {
  try {
    const { data } = await axios.get(`${supabaseUrl}/rest/v1/projects`, {
      headers: {
        apikey: apiKey,
        Authorization: `Bearer ${apiKey}`,
      },
      params: {
        select: "*",
        order: "created_at.desc",
      },
    });
    return data;
  } catch (error) {
    console.error("حدث خطأ أثناء جلب المشاريع:", error);
    return [];
  }
};

// ________________________________________________________________________________

export const getSkills = async () => {
  try {
    const { data } = await axios.get(`${supabaseUrl}/rest/v1/Skills`, {
      headers: {
        apikey: apiKey,
        Authorization: `Bearer ${apiKey}`,
      },
      params: {
        select: "*",
        order: "id.asc",
      },
    });
    return data;
  } catch (error) {
    console.error("حدث خطأ أثناء جلب المهارات:", error);
    return [];
  }
};

// __________________________________________________________________________________

export const fetchProjectById = async (id) => {
  try {
    const { data } = await axios.get(`${supabaseUrl}/rest/v1/projects`, {
      headers: {
        apikey: apiKey,
        Authorization: `Bearer ${apiKey}`,
      },
      params: {
        select: "*",
        id: `eq.${id}`,
        limit: 1,
      },
    });
    return data[0];
  } catch (error) {
    console.error(`حدث خطأ أثناء جلب المشروع ID ${id}:`, error);
    return null;
  }
};
