export const LEADERBOARD_MODEL = [
    {
        date: "12th February 2021",
        model: "Hero (No Pretraining)",
        tvr: 18.42,
        how2r: 15.65,
        youcook2r: "-",
        tvqa: 70.65,
        how2qa: 71.36,
        violin: 65.72,
        vlep: "-", 
        tvc: 32.72,
        youcook2c: "-"
    },
    {
        date: "12th February 2021",
        model: "Hero (Pretrained)",
        tvr: 36.66,
        how2r: 21.06,
        youcook2r: "-",
        tvqa: 73.61,
        how2qa: 73.81,
        violin: 68.59,
        vlep: "-",
        tvc: 34.16,
        youcook2c: "-"
    },
]

export const METRIC_MAPS = {
    "cap_avg_metric": ["tvc", "youcook2c"],
    "qa_avg_metric": ["tvqa", "how2qa", "violin", "vlep"],
    "ret_avg_metric": ["tvr", "how2r", "youcook2r"],
}

