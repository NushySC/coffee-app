import React from 'react';
import Tabs from './tabs';

function Main() {
    return (
        <div className="main">
          <div className="main__text">
            <h2>Our collection</h2>
              <p className="main__intro">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ut facilis nisi quo, fugiat nesciunt alias maxime non earum amet officia, voluptas consequuntur perferendis tempore provident tempora eveniet doloremque quisquam.</p>
          </div>
          <Tabs />
            <div className="list">

            </div>
        </div>
    );
}

export default Main;
