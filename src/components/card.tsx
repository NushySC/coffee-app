import React from 'react';
import { ReactComponent as StarIcon } from '../img/star.svg';

interface Product {
    name: string;
    image: string;
    pricing: number;
    rating?: number;
    votes: number;
    tags?: string[];
    availability?: boolean;
}

interface Props {
    coffee: Product;
}

const Card: React.FC<Props> = ({ coffee }) => {
    return (
        <div className={`card ${coffee.availability === false  ? 'sold-out' : ''}`}>
            {coffee.votes > 100 && <div className="card__popular">Popular</div>}
            <div className="card__image">
                <img src={coffee.image} alt={coffee.name} />
            </div>
            <div className="card__body">
                <div className="card__header">
                    <p className="card__name">{coffee.name}</p>
                    <p className="card__pricing">{coffee.pricing}</p>
                </div>
                <div className="card__popularity">
                    <span className="card__rating">
                        <StarIcon />
                        {coffee.rating}
                    </span>
                    <span className="card__votes">{coffee.votes} votes</span>
                </div>

                {coffee.tags && (
                    <div className="card__tags">
                        {coffee.tags.map((tag, index) => (
                            <div key={index} className="card__tag">
                                {tag}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
