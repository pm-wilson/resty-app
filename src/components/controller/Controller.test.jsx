import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Controller from './Controller';

describe('Controller container', () => {
  it('displays the greeting', () => {
    render(<Controller />);

    const urlInput = screen.getByLabelText('addresssearch');
    const formInput = screen.getByLabelText('methodradio');
    const textOutput = screen.getByLabelText('outputtext');
    const expectedOutput = [
      {
        'Species': 'Formerly: HumanCurrently: Head in Jar',
        'Age': 'Unknown',
        'Planet': 'Earth',
        'Profession': 'Unknown',
        'Status': 'Unknown',
        'FirstAppearance': 'A Head in the Polls',
        'PicUrl': 'https://vignette.wikia.nocookie.net/en.futurama/images/c/c6/RobReinersHead.png/revision/latest?cb=20110615120436',
        'Relatives': 'no relatives available',
        'VoicedBy': 'Unknown',
        'Name': 'Rob Reiner\'s head'
      },
      {
        'Species': 'Unknown',
        'Age': 'Unknown',
        'Planet': 'Unknown',
        'Profession': 'Unknown',
        'Status': 'Unknown',
        'FirstAppearance': 'Unknown',
        'PicUrl': 'https://res.cloudinary.com/teepublic/image/private/s--RisVF5Vs--/t_Preview/b_rgb:fffefe,c_limit,f_jpg,h_630,q_90,w_630/v1475865828/production/designs/720040_1.jpg',
        'Relatives': 'no relatives available',
        'VoicedBy': 'Unknown',
        'Name': 'Yanos'
      },
      {
        'Species': 'Formerly: HumanCurrently: Head in Jar',
        'Age': '1,083',
        'Planet': 'Earth',
        'Profession': 'Formerly: ActorCurrently: Head in Jar',
        'Status': 'Alive',
        'FirstAppearance': '"Calculon 2.0"',
        'PicUrl': 'https://vignette.wikia.nocookie.net/en.futurama/images/1/12/Robert_Wagner%27s_head.png/revision/latest/scale-to-width-down/350?cb=20180201182746',
        'Relatives': 'no relatives available',
        'VoicedBy': 'Robert Wagner',
        'Name': 'Robert Wagner\'s head'
      },
      {
        'Species': 'Unknown',
        'Age': 'Unknown',
        'Planet': 'Unknown',
        'Profession': 'Unknown',
        'Status': 'Unknown',
        'FirstAppearance': 'Anthology of Interest I',
        'PicUrl': 'https://vignette.wikia.nocookie.net/en.futurama/images/f/f2/Stephen_Hawking.jpg/revision/latest?cb=20091011232417',
        'Relatives': 'no relatives available',
        'VoicedBy': 'Unknown',
        'Name': 'Stephen Hawking'
      },
      {
        'Species': 'Formerly: HumanCurrently: Head in Jar',
        'Age': 'Unknown',
        'Planet': 'Earth',
        'Profession': 'Unknown',
        'Status': 'Unknown',
        'FirstAppearance': 'A Head in the Polls',
        'PicUrl': 'https://res.cloudinary.com/teepublic/image/private/s--RisVF5Vs--/t_Preview/b_rgb:fffefe,c_limit,f_jpg,h_630,q_90,w_630/v1475865828/production/designs/720040_1.jpg',
        'Relatives': 'no relatives available',
        'VoicedBy': 'Unknown',
        'Name': 'Tom Cruise\'s head'
      },
      {
        'Species': 'Formerly: Human Currently: Head in Jar',
        'Age': 'Unknown',
        'Planet': 'Earth',
        'Profession': 'Unknown',
        'Status': 'Unknown',
        'FirstAppearance': 'A Head in the Polls',
        'PicUrl': 'https://vignette.wikia.nocookie.net/en.futurama/images/1/18/WilliamShatnersHead.png/revision/latest?cb=20110614175019',
        'Relatives': 'no relatives available',
        'VoicedBy': 'Himself',
        'Name': 'William Shatner\'s head'
      },
      {
        'Species': 'Unknown',
        'Age': 'Unknown',
        'Planet': 'Unknown',
        'Profession': 'Unknown',
        'Status': 'Unknown',
        'FirstAppearance': 'Unknown',
        'PicUrl': 'https://res.cloudinary.com/teepublic/image/private/s--RisVF5Vs--/t_Preview/b_rgb:fffefe,c_limit,f_jpg,h_630,q_90,w_630/v1475865828/production/designs/720040_1.jpg',
        'Relatives': 'no relatives available',
        'VoicedBy': 'Unknown',
        'Name': 'Tritonian Yeti'
      },
      {
        'Species': 'Formerly: HumanCurrently: Head in a Jar',
        'Age': 'Unknown',
        'Planet': 'Earth',
        'Profession': 'Unknown',
        'Status': 'Unknown',
        'FirstAppearance': 'Space Pilot 3000',
        'PicUrl': 'https://res.cloudinary.com/teepublic/image/private/s--RisVF5Vs--/t_Preview/b_rgb:fffefe,c_limit,f_jpg,h_630,q_90,w_630/v1475865828/production/designs/720040_1.jpg',
        'Relatives': 'no relatives available',
        'VoicedBy': 'Unknown',
        'Name': 'Gillian Anderson\'s head'
      },
      {
        'Species': 'Formerly: HumanCurrently: Head in Jar',
        'Age': 'Unknown',
        'Planet': 'Earth',
        'Profession': 'Unknown',
        'Status': 'Unknown',
        'FirstAppearance': 'War is the H-Word',
        'PicUrl': 'https://vignette.wikia.nocookie.net/en.futurama/images/c/c6/Henry_Kissinger%27s_head.png/revision/latest?cb=20091116230159',
        'Relatives': 'no relatives available',
        'VoicedBy': 'John DiMaggio',
        'Name': 'Henry Kissinger\'s head'
      },
      {
        'Species': 'Formerly: HumanCurrently: Head in Jar',
        'Age': 'Unknown',
        'Planet': 'Earth',
        'Profession': 'Unknown',
        'Status': 'Unknown',
        'FirstAppearance': 'A Head in the Polls',
        'PicUrl': 'https://res.cloudinary.com/teepublic/image/private/s--RisVF5Vs--/t_Preview/b_rgb:fffefe,c_limit,f_jpg,h_630,q_90,w_630/v1475865828/production/designs/720040_1.jpg',
        'Relatives': 'no relatives available',
        'VoicedBy': 'Unknown',
        'Name': 'Jacques Cousteau\'s head'
      },
      {
        'Species': 'Formerly: HumanCurrently: Head in Jar',
        'Age': 'Unknown',
        'Planet': 'Earth',
        'Profession': 'Unknown',
        'Status': 'Unknown',
        'FirstAppearance': '"A Head in the Polls"',
        'PicUrl': 'https://res.cloudinary.com/teepublic/image/private/s--RisVF5Vs--/t_Preview/b_rgb:fffefe,c_limit,f_jpg,h_630,q_90,w_630/v1475865828/production/designs/720040_1.jpg',
        'Relatives': 'no relatives available',
        'VoicedBy': 'Unknown',
        'Name': 'Jon Stewart\'s head'
      },
      {
        'Species': 'Formerly: HumanCurrently: Head in Jar',
        'Age': 'Unknown',
        'Planet': 'Earth',
        'Profession': 'Unknown',
        'Status': 'Unknown',
        'FirstAppearance': '"A Head in the Polls"',
        'PicUrl': 'https://res.cloudinary.com/teepublic/image/private/s--RisVF5Vs--/t_Preview/b_rgb:fffefe,c_limit,f_jpg,h_630,q_90,w_630/v1475865828/production/designs/720040_1.jpg',
        'Relatives': 'no relatives available',
        'VoicedBy': 'Unknown',
        'Name': 'Long Dong Silver\'s head'
      },
      {
        'Species': 'Formerly: HumanCurrently: Head in Jar',
        'Age': 'Unknown',
        'Planet': 'Earth',
        'Profession': 'Unknown',
        'Status': 'Unknown',
        'FirstAppearance': '"The 30% Iron Chef"',
        'PicUrl': 'https://vignette.wikia.nocookie.net/en.futurama/images/d/d1/MarthaStewartsHead.png/revision/latest/scale-to-width-down/350?cb=20110627120428',
        'Relatives': 'no relatives available',
        'VoicedBy': 'Tress MacNeille',
        'Name': 'Martha Stewart\'s head'
      },
      {
        'Species': 'Formerly: Human and Head in Jar Currently: Head in Jar',
        'Age': 'Unknown',
        'Planet': 'Earth',
        'Profession': 'Unknown',
        'Status': 'Unknown',
        'FirstAppearance': 'Anthology of Interest I',
        'PicUrl': 'https://vignette.wikia.nocookie.net/en.futurama/images/a/ad/225px-Nichelle_Nichols.jpg/revision/latest?cb=20100626052136',
        'Relatives': 'no relatives available',
        'VoicedBy': 'Herself',
        'Name': 'Nichelle Nichols (character)'
      },
      {
        'Species': 'Formerly: HumanCurrently: Head in Jar',
        'Age': 'Unknown',
        'Planet': 'Earth',
        'Profession': 'Unknown',
        'Status': 'Unknown',
        'FirstAppearance': 'A Head in the Polls',
        'PicUrl': 'https://res.cloudinary.com/teepublic/image/private/s--RisVF5Vs--/t_Preview/b_rgb:fffefe,c_limit,f_jpg,h_630,q_90,w_630/v1475865828/production/designs/720040_1.jpg',
        'Relatives': 'no relatives available',
        'VoicedBy': 'Unknown',
        'Name': 'Sarah Michelle Gellar\'s head'
      },
      {
        'Species': 'Formerly: HumanCurrently: Head in Jar',
        'Age': 'Unknown',
        'Planet': 'Earth',
        'Profession': 'Formerly: President of the United States',
        'Status': 'Unknown',
        'FirstAppearance': 'When Aliens Attack',
        'PicUrl': 'https://vignette.wikia.nocookie.net/en.futurama/images/8/8e/TheodoreRooseveltsHead.png/revision/latest/scale-to-width-down/350?cb=20110615150221',
        'Relatives': 'no relatives available',
        'VoicedBy': 'Maurice LaMarche',
        'Name': 'Theodore Roosevelt\'s head'
      },
      {
        'Species': 'Unknown',
        'Age': 'Unknown',
        'Planet': 'Unknown',
        'Profession': 'Unknown',
        'Status': 'Unknown',
        'FirstAppearance': 'Unknown',
        'PicUrl': 'https://res.cloudinary.com/teepublic/image/private/s--RisVF5Vs--/t_Preview/b_rgb:fffefe,c_limit,f_jpg,h_630,q_90,w_630/v1475865828/production/designs/720040_1.jpg',
        'Relatives': 'no relatives available',
        'VoicedBy': 'Unknown',
        'Name': 'Benders from benderama'
      },
      {
        'Species': 'Formerly: HumanCurrently: Head in Jar',
        'Age': 'Unknown',
        'Planet': 'Earth',
        'Profession': 'Formerly: President of the United States',
        'Status': 'Unknown',
        'FirstAppearance': 'Space Pilot 3000',
        'PicUrl': 'https://vignette.wikia.nocookie.net/en.futurama/images/0/03/RonaldReagansHead.png/revision/latest?cb=20110615120713',
        'Relatives': 'no relatives available',
        'VoicedBy': 'Maurice LaMarche',
        'Name': 'Ronald Reagan\'s head'
      },
      {
        'Species': 'Robotic Spacecraft',
        'Age': 'N/A',
        'Planet': 'Earth',
        'Profession': 'Flying the Planet Express crew',
        'Status': 'Unknown',
        'FirstAppearance': 'Space Pilot 3000',
        'PicUrl': 'https://vignette.wikia.nocookie.net/en.futurama/images/c/c1/Futurama_Planet_Express_spaceship.jpg/revision/latest/scale-to-width-down/350?cb=20061012224323',
        'Relatives': 'no relatives available',
        'VoicedBy': 'Female: Sigourney WeaverMale: Maurice LaMarche',
        'Name': 'Planet Express ship'
      },
      {
        'Species': 'Formerly: Human Currently: Head in Jar',
        'Age': 'Unknown',
        'Planet': 'Earth',
        'Profession': 'Unknown',
        'Status': 'Unknown',
        'FirstAppearance': 'A Head in the Polls',
        'PicUrl': 'https://res.cloudinary.com/teepublic/image/private/s--RisVF5Vs--/t_Preview/b_rgb:fffefe,c_limit,f_jpg,h_630,q_90,w_630/v1475865828/production/designs/720040_1.jpg',
        'Relatives': 'no relatives available',
        'VoicedBy': 'Unknown',
        'Name': 'Sharon Stone\'s head'
      }
    ];

    fireEvent.change(urlInput, {
      target: { value: 'http://futuramaapi.herokuapp.com/api/v2/characters' }
    });

    fireEvent.submit(formInput);

    return waitFor(() => {
      expect(textOutput).toHaveDisplayValue(expectedOutput);
    });
  });
});
