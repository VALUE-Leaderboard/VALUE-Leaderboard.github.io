import React, { Component } from 'react';
import "./People.css"

export class People extends Component {
    displayName = People.name

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="parent col-md-3"> 
                        <a href="https://www.cs.unc.edu/~jielei/" target="_blank">
                            <div class="imgDiv"><img class="profileDescriptionImg" src="https://convaistorageui.blob.core.windows.net/images/value_leaderboard/jie_lei.jpg" /></div>
                            <div class="nameText"> Jie Lei <br/> University of North Carolina </div>
                        </a>
                    </div>

                    <div class="parent col-md-3">
                        <a href="https://scholar.google.com/citations?user=WR875gYAAAAJ&hl=en" target="_blank">
                            <div class="imgDiv"><img class="profileDescriptionImg" src="https://convaistorageui.blob.core.windows.net/images/value_leaderboard/linjie_li_cropped.jpg" /></div>
                            <div class="nameText"> Linjie Li <br /> Microsoft </div>
                        </a>
                    </div>

                    <div class="parent col-md-3">
                        <a href="https://luoweizhou.github.io/" target="_blank">
                            <div class="imgDiv"><img class="profileDescriptionImg" src="https://convaistorageui.blob.core.windows.net/images/value_leaderboard/luowei_cropped.jpg" /></div>
                            <div class="nameText"> Luowei Zhou <br /> Microsoft </div>
                        </a>
                    </div>

                    <div class="parent col-md-3">
                        <a href="https://www.linkedin.com/in/rohitpillai97" target="_blank">
                            <div class="imgDiv"><img class="profileDescriptionImg" src="https://convaistorageui.blob.core.windows.net/images/value_leaderboard/rohit_crop.jpg" /></div>
                            <div class="nameText"> Rohit Pillai <br /> Microsoft </div>
                        </a>
                    </div>
                </div>

                <div class="row">
                    <div class="parent col-md-4">
                        <a href="https://sites.google.com/site/chengyu05" target="_blank">
                            <div class="imgDiv"><img class="profileDescriptionImg" src="https://convaistorageui.blob.core.windows.net/images/value_leaderboard/yu.jfif" /></div>
                            <div class="nameText"> Yu Cheng <br /> Microsoft </div>
                        </a>
                    </div>

                    <div class="parent col-md-4">
                        <a href="https://scholar.google.com/citations?user=Gptgy4YAAAAJ&hl=en" target="_blank">
                            <div class="imgDiv"><img class="profileDescriptionImg" src="https://convaistorageui.blob.core.windows.net/images/value_leaderboard/yenchun.jfif" /></div>
                            <div class="nameText"> Yen-Chun Chen <br /> Microsoft </div>
                        </a>
                    </div>

                    <div class="parent col-md-4">
                        <a href="https://zhegan27.github.io/" target="_blank">
                            <div class="imgDiv"><img class="profileDescriptionImg" src="https://convaistorageui.blob.core.windows.net/images/value_leaderboard/zhe_cropped.jpg" /></div>
                            <div class="nameText"> Zhe Gan <br /> Microsoft </div>
                        </a>
                    </div>

                </div>

                <div class="row">
                    <div class="parent col-md-4">
                        <a href="https://lichengunc.github.io/" target="_blank">
                            <div class="imgDiv"><img class="profileDescriptionImg" src="https://convaistorageui.blob.core.windows.net/images/value_leaderboard/licheng_cropped.jpg" /></div>
                            <div class="nameText"> Licheng Yu <br /> Facebook </div>
                        </a>
                    </div>
                    <div class="parent col-md-4">
                        <a href="https://eric-xw.github.io/" target="_blank">
                            <div class="imgDiv"><img class="profileDescriptionImg" src="https://convaistorageui.blob.core.windows.net/images/value_leaderboard/xin_wang.jpg" /></div>
                            <div class="nameText"> Xin (Eric) Wang <br /> UC Santa Cruz </div>
                        </a>
                    </div>

                    <div class="parent col-md-4">
                        <a href="http://www.cs.ucsb.edu/~william/" target="_blank">
                            <div class="imgDiv"><img class="profileDescriptionImg" src="https://convaistorageui.blob.core.windows.net/images/value_leaderboard/william_wang.jpg" /></div>
                            <div class="nameText"> William Yang Wang <br /> UC Santa Barbara </div>
                        </a>
                    </div>

                </div>

                <div class="row">
                    <div class="parent col-md-4">
                        <a href="http://tamaraberg.com/" target="_blank">
                            <div class="imgDiv"><img class="profileDescriptionImg" src="https://convaistorageui.blob.core.windows.net/images/value_leaderboard/tamara_cropped.jpg" /></div>
                            <div class="nameText"> Tamara L Berg <br /> University of North Carolina </div>
                        </a>
                    </div>

                    <div class="parent col-md-4">
                        <a href="https://www.cs.unc.edu/~mbansal/" target="_blank">
                            <div class="imgDiv"><img class="profileDescriptionImg" src="https://convaistorageui.blob.core.windows.net/images/value_leaderboard/mohit_cropped.png" /></div>
                            <div class="nameText"> Mohit Bansal <br /> University of North Carolina </div>
                        </a>
                    </div>

                    <div class="parent col-md-4">
                        <a href="https://www.linkedin.com/in/jingjing-liu-65703431/" target="_blank">
                            <div class="imgDiv"><img class="profileDescriptionImg" src="https://convaistorageui.blob.core.windows.net/images/value_leaderboard/jj_cropped.png" /></div>
                            <div class="nameText"> Jingjing Liu <br /> Microsoft </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

}
