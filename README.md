# VALUE Benchamrk Website
https://value-benchmark.github.io/

# Show your results on our leaderboard
If you wish to show your results on our leaderboard, please follow the below template to email us at value-benchmark@googlegroups.com.

```json
{
  "date": "06/07/2021",
  "codaLab username": "",
  "model": "HERO (AT->ST, PT+FT)",
  "institution": "VALUE baseline",
  "paper_link": "",
  "code_link": "",
  "tvr": 13.56,
  "how2r": 3.95,
  "yc2r": 54.28,
  "vatex_en_r":
  49.09,
  "tvqa": 74.83,
  "how2qa": 74.60,
  "violin": 67.18,
  "vlep":  69.37,
  "tvc": 48.13,
  "yc2c": 121.89,
  "vatex_en_c": 56.54,
  "value_leaderboard": true,
  "retrieval_leaderboard": true,
  "qa_leaderboard": true,
  "caption_leaderboard": true,
  "is_ensemble": false 
 }
```
- All scores are obtained from CodaLab evaluation, make sure your codaLab username is correct.
- For retrieval tasks, please report AveR. For captioning tasks, please report CiDER scores.
- For any missing scores, set as `null`.
- `value_leaderboard`, `retrieval_leaderboard`, `qa_leaderboard`, `caption_leaderboard` are set to be `true`, 
   if you wish to show your results on each of the corresponding leaderboards.
- `institution` can be anonymous.
- `paper_link` and `code_link` are optinal.
- `is_emsemble` it is mendatory to share whether your results are from an ensemble model. If yes, sharing best single model results is highly encouraged.
