import React from 'react'
import './DescriptionStyles.css'

const Description = () => {
  return (
    <div className = "Description-container">
        <div className = "Description-image">
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Blumenwiese_bei_Obermaiselstein05.jpg/1200px-Blumenwiese_bei_Obermaiselstein05.jpg" alt = "Flower meadow"/>
        </div>
        <div className = "Description-text">
            <h1> About Awake Forest </h1>
            <p> The difference between the mathematical and the intuitive mind: In the one the principles are palpable, but removed from ordinary use; so that for want of habit it is difficult to turn one's mind in that direction: but if one turns it thither ever so little, one sees the principles fully, and one must have a quite inaccurate mind who reasons wrongly from principles so plain that it is almost impossible they should escape notice.
                But in the intuitive mind the principles are found in common use, and are before the eyes of everybody. One has only to look, and no effort is necessary; it is only a question of good eyesight, but it must be good, for the principles are so subtle and so numerous, that it is almost impossible but that some escape notice. Now the omission of one principle leads to error; thus one must have very clear sight to see all the principles, and in the next place an accurate mind not to draw false deductions from known principles.
                All mathematicians would then be intuitive if they had clear sight, for they do not reason incorrectly from principles known to them; and intuitive minds would be mathematical if they could turn their eyes to the principles of mathematics to which they are unused.
            </p>
        </div>
    </div>
  )
}

export default Description
