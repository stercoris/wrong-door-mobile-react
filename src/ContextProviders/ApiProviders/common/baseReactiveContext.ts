import { SubscriptionHookOptions } from "@apollo/client";
import { useEffect, useState } from "react";

interface Connection<Entity> {
	allEntities: Entity[] | undefined;
	newIncomingEntity: Entity | undefined;
	deletedIncomingEntity: Entity | undefined;
}

interface ConnectEntityToGraphqlresponse<Entity> {
	isLoaded: boolean;
	entities: Entity[];
}

type EntityWithID = { id: number };

export default function ConnectEntityToGraphql<Entity extends EntityWithID>({
	allEntities,
	deletedIncomingEntity,
	newIncomingEntity,
}: Connection<Entity>): ConnectEntityToGraphqlresponse<Entity> {
	const [isLoaded, setLoaded] = useState<boolean>(false);
	const [entities, setEntities] = useState<Entity[]>([]);

	const addEntity = (...newEntities: Entity[]) => {
		setEntities([...entities, ...newEntities]);
		setLoaded(true);
	};

	const deleteEntity = (entityId: number) =>
		setEntities(entities.filter((entity) => entity.id != entityId));

	useEffect(() => allEntities && addEntity(...allEntities), [allEntities]);

	useEffect(
		() => deleteEntity(deletedIncomingEntity?.id!),
		[deletedIncomingEntity]
	);

	useEffect(
		() => newIncomingEntity && addEntity(newIncomingEntity),
		[newIncomingEntity]
	);

	return { isLoaded, entities };
}
